import React from 'react';
import {func, number} from 'prop-types';
import StepperInput from '../../components/StepperInput';

const round = (float) => Math.round((float) * 100) / 100;

const ScaleInput = ({
  value,
  onChange,
}) => {
  const minValue = 0.5;

  const handleDecrease = () => {
    if (+value > minValue) {
      onChange(round(+value - .1));
    }
  };

  const handleIncrease = () => onChange(round(+value + .1));

  return (
    <StepperInput
      onIncrease={handleIncrease}
      onDecrease={handleDecrease}
      unit="%"
      value={parseInt(value * 100, 10)}
      minValue={minValue * 100}
    />
  );
};

ScaleInput.propTypes = {
  value: number.isRequired,
  onChange: func.isRequired,
};

export default ScaleInput;
