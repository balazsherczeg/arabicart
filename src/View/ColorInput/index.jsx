import React, {useState, useEffect, useRef} from 'react';
import {func, string} from 'prop-types';
import styled from 'styled-components';

import ColorPicker from './ColorPicker';

const Wrapper = styled.div``;

const Indicator = styled.button`
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  display: inline-block;
  height: 1rem;
  margin-right: .5rem;
  vertical-align: middle;
  width: 1rem;
`;

const ColorInput = ({
  onChange,
  shapeGroupId,
  value,
}) => {
  const [pickerOpen, setPickerOpen] = useState(false);
  const ref = useRef(null);

  const getModalPosition = () => {
    return (ref)
      ? ref.current.getBoundingClientRect().x
      : 0;
  };

  const togglePicker = () => {
    setPickerOpen(!pickerOpen);
  };

  const closePicker = () => setPickerOpen(false);

  const handleChange = ({hex: color}) => {
    onChange(color, shapeGroupId);
  };

  return (
    <Wrapper ref={ref}>
      <Indicator
        title="Change color"
        style={{backgroundColor: value}}
        role="button"
        onClick={togglePicker}
      />
      {pickerOpen && (
        <ColorPicker
          left={getModalPosition()}
          color={value}
          onChange={handleChange}
          onClose={closePicker}
        />
      )}
    </Wrapper>
  );
};

ColorInput.propTypes = {
  value: string.isRequired,
  onChange: func.isRequired,
  shapeGroupId: string.isRequired,
};

export default ColorInput;
