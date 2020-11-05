import React, {useState, useRef} from 'react';
import {func, string} from 'prop-types';
import styled from 'styled-components';

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

const FillInput = ({
  value,
  onChange,
  shapeGroupId,
}) => {
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);

  const handleChange = (se) => {
    onChange(se.target.value, shapeGroupId);
  };

  const handleBlur = () => {
    setOpen(false);
  };

  const handleIndicatorClick = () => {
    setOpen(!open);
  };

  return (
    <Wrapper>
      <Indicator
        title="Change color"
        style={{backgroundColor: value}}
        role="button"
        onClick={handleIndicatorClick}
      />
      {open && (
        <input
          ref={inputRef}
          type="text"
          onChange={handleChange}
          value={value}
          onBlur={handleBlur}
        />
      )}
    </Wrapper>
  );
};

FillInput.propTypes = {
  value: string.isRequired,
  onChange: func.isRequired,
  shapeGroupId: string.isRequired,
};

export default FillInput;
