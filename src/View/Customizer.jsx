import React from 'react';
import {func, number, objectOf, string} from 'prop-types';
import styled from 'styled-components';

import ColorInput from './ColorInput';
import Scale from './Buttons/Scale';

const Wrapper = styled.div`
  align-items: center;
  background: #eee;
  display: flex;
  flex-direction: row-reverse;
  height: 48px;
  padding: 0 16px;
  position: relative;
`;

const Inner = styled.div`
  display: flex;
`;

const Item = styled.div`
  margin-left: 2rem;
  display: flex;
`;

const Label = styled.div`
  font-family: var(--sansMedium);
  font-size: 12px;
  margin-right: 1em;
  text-transform: uppercase;

  &::after {
    content: ':';
  }
`;

const Customizer = ({
  onFillChange,
  onStrokeColorChange,
  shapeGroups,
  strokeColor,
  strokeScale,
  onStrokeWidthChange,
}) => (
  <Wrapper>
    <Inner>
      <Item>
        <Label>
          Fill
        </Label>

        {Object.keys(shapeGroups).length && Object.keys(shapeGroups).map((shapeGroupId) => (
          <ColorInput
            value={shapeGroups[shapeGroupId]}
            onChange={onFillChange}
            key={shapeGroupId}
            shapeGroupId={shapeGroupId}
          />
        ))}
      </Item>

      <Item>
        <Label>
          Stroke
        </Label>

        <ColorInput
          value={strokeColor}
          onChange={onStrokeColorChange}
        />

        <Scale
          value={strokeScale}
          onChange={onStrokeWidthChange}
          minValue={0}
        />
      </Item>
    </Inner>
  </Wrapper>
);

Customizer.propTypes = {
  onFillChange: func.isRequired,
  onStrokeColorChange: func.isRequired,
  onStrokeWidthChange: func.isRequired,
  shapeGroups: objectOf(string).isRequired,
  strokeColor: string.isRequired,
  strokeScale: number.isRequired,
};

export default Customizer;
