import React, {useState} from 'react';
import {bool, func, number, string} from 'prop-types';
import styled from 'styled-components';

import ColorInput from './ColorInput';
import Indicator from './ColorInput/Indicator';
import Button from '../../Buttons/Button';
import StrokeWidthInput from './StrokeWidthInput';

const Wrapper = styled.div`
  align-items: center;
  background: #eee;
  display: flex;
  height: 48px;
  padding: 0 16px;
  position: relative;
  justify-content: space-between;
`;

const Item = styled.div`
  align-items: center;
  display: flex;
`;

const Label = styled.div`
  font-family: var(--sansBold);
  font-size: 12px;
  letter-spacing: .05em;
  margin-right: 1em;
  opacity: .7;
  text-transform: uppercase;
`;

const IndicatorWrapper = styled.div`
  margin-left: .75rem;
`;

const FillInputWrapper = styled.div`
  position: absolute;
  bottom: var(--rowHeight);
  right: 0;
`;

const StrokeColorInputWrapper = styled.div`
  position: absolute;
  bottom: var(--rowHeight);
  left: 0;
`;

const Customizer = ({
  onFillChange,
  fillColor,
  onDeselect,
  showDeselect,
  strokeWidth,
  strokeColor,
  onStrokeColorChange,
  onStrokeWidthChange,
}) => {
  const [showStrokeColorInput, setShowStrokeColorInput] = useState(false);

  return (
    <Wrapper>
      <Item>
        <Label>Stroke</Label>
        <StrokeWidthInput
          value={strokeWidth}
          onChange={onStrokeWidthChange}
        />

        {!!strokeWidth && (
          <IndicatorWrapper>
            <Indicator
              onClick={() => {
                setShowStrokeColorInput(!showStrokeColorInput);
              }}
              value={strokeColor}
            />
          </IndicatorWrapper>
        )}

        {showStrokeColorInput && (
          <StrokeColorInputWrapper>
            <ColorInput
              value={strokeColor}
              onChange={onStrokeColorChange}
            />
          </StrokeColorInputWrapper>
        )}
      </Item>

      <Item>
        {fillColor ? (
          <Button onClick={onDeselect} primary={false}>Deselect</Button>
        ) : (
          <Label>Click shape to change fill</Label>
        )}

        {fillColor && (
          <FillInputWrapper>
            <ColorInput
              value={fillColor}
              onChange={onFillChange}
            />
          </FillInputWrapper>
        )}
      </Item>
    </Wrapper>
  );
};

Customizer.propTypes = {
  onFillChange: func.isRequired,
  onStrokeColorChange: func.isRequired,
  onStrokeWidthChange: func.isRequired,
  strokeColor: string.isRequired,
  fillColor: string.isRequired,
  onDeselect: func.isRequired,
  showDeselect: bool.isRequired,
  strokeWidth: number.isRequired,
};

export default Customizer;
