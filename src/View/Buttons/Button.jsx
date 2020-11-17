import React from 'react';
import {bool, node, func, string} from 'prop-types';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  background: ${({primary}) => (primary ? 'var(--accentColor)' : '#fff')};
  border: 2px solid;
  border-color: ${({primary}) => (primary ? 'var(--accentColor)' : '#fff')};
  border-radius: 12px;
  color: ${({primary}) => (!primary ? '#000c' : '#fff')};
  cursor: pointer;
  height: 24px;
  letter-spacing: .05em;
  line-height: 21px;
  padding: 0 12px;
  text-transform: uppercase;
  width: ${({width}) => width};
  font-family: ${({primary}) => (primary ? 'var(--sansMedium)' : 'var(--sansSemiBold)')};
  font-size: 12px;

  &:hover {
    background: ${({primary}) => (primary ? 'var(--accentColor)' : '#ccc')};
    border-color: ${({primary}) => (primary ? 'var(--accentColor)' : '#ccc')};
    color: ${({primary}) => (!primary ? '#fff' : '#fff')};
  }
`;

const Button = ({
  className,
  children,
  onClick,
  primary,
  width,
}) => (
  <ButtonStyled
    className={className}
    onClick={onClick}
    type="button"
    width={width}
    primary={primary}
  >
    {children}
  </ButtonStyled>
);

Button.propTypes = {
  className: string,
  primary: bool,
  children: node.isRequired,
  onClick: func.isRequired,
  width: string,
};

Button.defaultProps = {
  className: null,
  primary: true,
  width: 'auto',
};

export default Button;
