import React from 'react';
import {func, number} from 'prop-types';
import StepperInput from '../../../components/StepperInput';

const ScaleInput = ({
  value,
  onChange,
}) => {
  const handleDecrease = () => {
    if (value > 0) {
      onChange(+value - 1);
    }
  };

  const handleIncrease = () => onChange(value + 1);

  return (
    <StepperInput
      onIncrease={handleIncrease}
      onDecrease={handleDecrease}
      unit="PX"
      value={value}
    />
  );
};

ScaleInput.propTypes = {
  value: number.isRequired,
  onChange: func.isRequired,
};

export default ScaleInput;
