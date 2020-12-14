import React from 'react';
import {func, string} from 'prop-types';
import styled from 'styled-components';

const $Indicator = styled.button`
  background-color: ${({backgroundColor}) => backgroundColor};
  border-radius: 1.5rem;
  border: none;
  cursor: pointer;
  display: inline-block;
  height: 1.5rem;
  vertical-align: middle;
  width: 1.5rem;
`;

const Indicator = ({
  onClick,
  value,
  title,
  size,
}) => (
  <$Indicator
    title={title}
    backgroundColor={value}
    role="button"
    onClick={onClick}
    size={size}
  />
);

Indicator.propTypes = {
  onClick: func.isRequired,
  value: string.isRequired,
  title: string,
};

Indicator.defaultProps = {
  title: 'Change color',
};

export default Indicator;
