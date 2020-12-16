import React from 'react';
import {bool, node, func, string} from 'prop-types';
import styled from 'styled-components';

const $Button = styled.button`
  background: ${({primary}) => (primary ? 'var(--accentColor)' : '#fff')};
  border: 2px solid;
  border-color: ${({primary}) => (primary ? 'var(--accentColor)' : '#fff')};
  border-radius: 12px;
  color: ${({primary}) => (!primary ? '#000c' : '#fff')};
  cursor: pointer;
  height: 22px;
  letter-spacing: .05em;
  line-height: 19px;
  padding: 0 10px;
  text-transform: uppercase;
  width: ${({width}) => width};
  font-family: ${({primary}) => (primary ? 'var(--sansBold)' : 'var(--sansBold)')};
  font-size: ${({small}) => (small ? '10px' : '12px')};

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
  small,
}) => (
  <$Button
    className={className}
    onClick={onClick}
    type="button"
    width={width}
    primary={primary}
    small={small}
  >
    {children}
  </$Button>
);

Button.propTypes = {
  className: string,
  primary: bool,
  children: node.isRequired,
  onClick: func.isRequired,
  width: string,
  small: bool,
};

Button.defaultProps = {
  className: null,
  primary: true,
  width: 'auto',
  small: false,
};

export default Button;
