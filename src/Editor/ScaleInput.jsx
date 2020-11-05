import React from 'react';
import {func, number} from 'prop-types';
import styled from 'styled-components';

const round = (float) => Math.round((float) * 100) / 100;

const Wrapper = styled.div`
  display: flex;
  font-family: var(--sans);
`;

const Percent = styled.span`
  width: 4.5ch;
  text-align: center;
`;

const Button = styled.button`
  background: none;
  border-radius: 100%;
  border: none;
  cursor: pointer;
  font-family: var(--sans);
  font-size: 1.1rem;
  height: 1.5rem;
  line-height: 1rem;
  padding: 0;
  width: 1.5rem;

  &:hover {
    background: #ccc;
    fill: #fff;
  }
`;

const ScaleInput = ({
  value,
  onChange,
}) => {
  const decrease = () => {
    if (+value > 0.1) {
      onChange(round(+value - .1));
    }
  };

  const increase = () => onChange(round(+value + .1));

  return (
    <Wrapper>
      <Button type="button" onClick={decrease}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M19 13H5v-2h14v2z" /></svg>
      </Button>
      <Percent>{`${parseInt(value * 100, 10)}%`}</Percent>
      <Button type="button" onClick={increase}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>
      </Button>
    </Wrapper>
  );
};

ScaleInput.propTypes = {
  value: number.isRequired,
  onChange: func.isRequired,
};

export default ScaleInput;
