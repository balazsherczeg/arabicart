import React from 'react';
import {bool, string} from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0 .5em;
  line-height: 1em;
  text-align: center;

  &:not(:last-child) {
    border-right: 2px solid var(--accentColor);
  }

  a {
    color: #000;
    font-family: ${({active}) => (active ? 'var(--serifItalic)' : 'var(--serif)')};
    letter-spacing: 0.02em;
    opacity: .9;
    text-decoration: none;
    transition: color .5s;
  }

  a:hover {
    color: var(--accentColor);
  }
`;

const Item = ({
  active,
  children,
  to,
}) => (
  <Wrapper
    active={active}
  >
    <Link to={to}>{children}</Link>
  </Wrapper>
);

Item.propTypes = {
  to: string.isRequired,
  children: string.isRequired,
  active: bool.isRequired,
};

export default Item;
