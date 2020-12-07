import React from 'react';
import {func, string} from 'prop-types';
import styled from 'styled-components';

const $Indicator = styled.button`
  background-color: ${({backgroundColor}) => backgroundColor};
  border-radius: 1.5rem;
  border: none;
  cursor: pointer;
  display: inline-block;
  height: 1.6rem;
  margin-right: .5rem;
  vertical-align: middle;
  width: 1.6rem;
`;

const Indicator = ({
  onClick,
  value,
  title,
}) => (
  <$Indicator
    title={title}
    backgroundColor={value}
    role="button"
    onClick={onClick}
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
