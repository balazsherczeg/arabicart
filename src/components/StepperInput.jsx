import React from 'react';
import {func, number, string} from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  font-family: var(--sansSemiBold);
  color: #000c;
`;

const Percent = styled.span`
  width: 4.5ch;
  text-align: center;
  font-size: 14px;
`;

const Button = styled.button`
  background: none;
  border-radius: 100%;
  border: none;
  cursor: pointer;
  fill: #000c;
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
  onIncrease,
  onDecrease,
  unit,
}) => (
  <Wrapper>
    <Button type="button" onClick={onDecrease}>
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M19 13H5v-2h14v2z" /></svg>
    </Button>
    <Percent>{`${value}${unit}`}</Percent>
    <Button type="button" onClick={onIncrease}>
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>
    </Button>
  </Wrapper>
);

ScaleInput.propTypes = {
  value: number.isRequired,
  onIncrease: func.isRequired,
  onDecrease: func.isRequired,
  unit: string.isRequired,
};

export default ScaleInput;
