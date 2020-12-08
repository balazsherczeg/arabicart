import React from 'react';
import {bool, func, number, objectOf, string} from 'prop-types';
import styled from 'styled-components';
import Selectable from './Selectable';
import Selected from './Selected';

const Wrapper = styled.div`
  position: relative;

  ${({fillColors}) => (
    Object.keys(fillColors).map((shapeClass) => (`
      .${shapeClass} {
        fill: ${fillColors[shapeClass]} !important;
      }
    `))
  )}

  ${({strokeWidth, strokeColor}) => (`
    .line {
      stroke-width: ${strokeWidth}px;
      stroke: ${strokeColor};
    }
  `)}
`;

const Tile = ({
  fillColors,
  onDeselect,
  onShapeClick,
  scale,
  selectedClass,
  selectedGroup,
  showGuides,
  src,
  strokeColor,
  strokeWidth,
}) => (
  <Wrapper
    fillColors={fillColors}
    selectedClass={selectedClass}
    strokeColor={strokeColor}
    strokeWidth={strokeWidth}
  >
    <Selectable
      onShapeClick={onShapeClick}
      scale={scale}
      selectedClass={selectedClass}
      showGuides={showGuides}
      src={src}
    />
    {selectedGroup && (
      <Selected
        onDeselect={onDeselect}
        selectedGroup={selectedGroup}
        src={src}
        zoom={scale}
      />
    )}
  </Wrapper>
);

Tile.propTypes = {
  fillColors: objectOf(string).isRequired,
  onDeselect: func.isRequired,
  onShapeClick: func.isRequired,
  scale: number.isRequired,
  selectedClass: string.isRequired,
  selectedGroup: string.isRequired,
  showGuides: bool.isRequired,
  src: string.isRequired,
  strokeColor: string.isRequired,
  strokeWidth: number.isRequired,
};

export default Tile;
