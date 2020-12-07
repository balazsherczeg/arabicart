import React, {useState, useRef} from 'react';
import {bool, number, string} from 'prop-types';
import styled from 'styled-components';
import Customizer from './Customizer';
import Tile from './Tile';
import Layout from './Layout';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const ControlRow = styled.div`
  bottom: var(--rowHeight);
  position: absolute;
  right: 0;
  width: 100%;
`;

const getShapeClass = ({classList}) => {
  return [...classList].find((className) => className.startsWith('shape-'));
};

const getShapeGroupElements = (className, root) => {
  const tile = root.querySelector('.Selectable');
  const elements = tile.querySelectorAll(`.${className}`);
  return [...elements].map((element) => element.outerHTML).join('');
};

const getShapeColor = (target) => {
  return window.getComputedStyle(target, null).getPropertyValue('fill');
};

const Editable = ({
  // onChange,
  showGuides,
  src,
}) => {
  const ref = useRef(null);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [overwrittenColors, setOverwrittenColors] = useState({});
  const [strokeWidth, setStrokeWidth] = useState(0);
  const [strokeColor, setStrokeColor] = useState('#000');

  const select = (target) => {
    const className = getShapeClass(target);
    setSelectedClass(getShapeClass(target));
    setSelectedColor(getShapeColor(target));
    setSelectedGroup(getShapeGroupElements(className, ref.current));
  };

  const deselect = () => {
    setSelectedClass(null);
    setSelectedColor(null);
    setSelectedGroup(null);
  };

  const handleShapeClick = ({target}) => {
    select(target);
  };

  const handleFillChange = (color) => {
    const overwritableColors = {
      ...overwrittenColors,
      [selectedClass]: color,
    };
    setOverwrittenColors(overwritableColors);
    setSelectedColor(color);
  };

  return (
    <Wrapper ref={ref} className="Editable">
      <Layout src={src}>
        <Tile
          {...{
            fillColors: overwrittenColors,
            onShapeClick: handleShapeClick,
            selectedClass,
            showGuides,
            src,
            selectedGroup,
            onDeselect: deselect,
            strokeWidth,
            strokeColor,
          }}
        />
      </Layout>

      <ControlRow>
        <Customizer
          fillColor={selectedColor}
          onDeselect={deselect}
          onFillChange={handleFillChange}
          onStrokeColorChange={setStrokeColor}
          onStrokeWidthChange={setStrokeWidth}
          showDeselect={selectedClass}
          strokeColor={strokeColor}
          strokeWidth={strokeWidth}
        />
      </ControlRow>
    </Wrapper>
  );
};

Editable.propTypes = {
  scale: number.isRequired,
  showGuides: bool,
  src: string.isRequired,
};

Editable.defaultProps = {
  showGuides: false,
};

export default Editable;
