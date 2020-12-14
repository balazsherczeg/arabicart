import React from 'react';
import {func, string} from 'prop-types';
import styled from 'styled-components';
import {ChromePicker} from 'react-color';

import Button from '../../../Buttons/Button';
import Indicator from './Indicator';
import useSwatches from '../useSwatches';

const Wrapper = styled.div`
  .chrome-picker {
    box-shadow: none !important;
    border-radius: 0 !important;
  }

  background: #fff;
  width: 225px;
`;

const SwatchWrapper = styled.div`
  padding: 1rem;
`;

const Swatches = styled.div`
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Swatch = styled.div`
  float: left;
  padding: .25rem
`;

const AddSwatch = styled.div`
  clear: both;
  padding-top: .5rem;
  text-align: center;
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
      <SwatchWrapper>
        <Swatches>
          {swatches.map(((swatch) => (
            <Swatch>
              <Indicator
                value={swatch}
                onClick={() => {
                  onChange(swatch);
                }}
                title="Apply swatch"
              />
            </Swatch>
          )))}
        </Swatches>

        <AddSwatch>
          <Button
            onClick={() => setSwatch(value)}
            primary={false}
            small
          >
            Add swatch
          </Button>
        </AddSwatch>
      </SwatchWrapper>
    </Wrapper>
  ));
};

ColorInput.propTypes = {
  value: string.isRequired,
  onChange: func.isRequired,
};

export default ColorInput;
