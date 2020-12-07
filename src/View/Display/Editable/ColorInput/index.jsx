import React from 'react';
import {func, string} from 'prop-types';
import styled from 'styled-components';
import {ChromePicker} from 'react-color';

import Indicator from './Indicator';
import useSwatches from '../useSwatches';

const Wrapper = styled.div`
  .chrome-picker {
    box-shadow: none !important;
    border-radius: 0 !important;
  }

  background: #fff;
`;

const ColorInput = ({
  onChange,
  value,
}) => {
  const [swatches, setSwatch] = useSwatches();

  const handleChange = ({hex: color}) => {
    onChange(color);
  };

  return (value && (
    <Wrapper>
      <ChromePicker
        color={value}
        disableAlpha
        onChangeComplete={handleChange}
      />
      {swatches.map(((swatch) => (
        <Indicator
          value={swatch}
          onClick={() => {
            onChange(swatch);
          }}
        />
      )))}
      <button type="button" onClick={() => setSwatch(value)}>Add swatch</button>
    </Wrapper>
  ));
};

ColorInput.propTypes = {
  value: string.isRequired,
  onChange: func.isRequired,
};

export default ColorInput;
