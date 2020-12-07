import React, {useRef, useEffect} from 'react';
import {func, number, string} from 'prop-types';
import styled from 'styled-components';

import useSrcDimensions from '../../useSrcDimensions';

const Svg = styled.svg`
  position: absolute;
  top: 0;
  cursor: pointer;
  pointer-events: none;
  width: 100%;
  height: 100%;

  & > * {
    cursor: pointer;
  }

  polygon, rect, path {
    pointer-events: auto;
    stroke-width: 2px;
    stroke: magenta;
    fill: transparent;
  }
`;

const Selected = ({
  src,
  selectedGroup,
  onDeselect,
}) => {
  const ref = useRef(null);
  const {height, width} = useSrcDimensions(src);

  const handleShapeClick = () => {
    onDeselect();
  };

  useEffect(() => {
    if (ref.current) {
      const shapes = ref.current.querySelectorAll('polygon, rect, path');
      shapes.forEach((shape) => {
        shape.addEventListener('click', handleShapeClick);
      });
    }
  }, [ref, selectedGroup]); // eslint-disable-line

  return (
    <Svg
      viewBox={`0 0 ${width} ${height}`}
      ref={ref}
    >
      <g
        dangerouslySetInnerHTML={{__html: selectedGroup}}
      />
    </Svg>
  );
};

Selected.propTypes = {
  src: string.isRequired,
  selectedGroup: string.isRequired,
  onDeselect: func.isRequired,
};

export default Selected;
