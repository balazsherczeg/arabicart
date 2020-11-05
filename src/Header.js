import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  padding: 1.5rem 1.5rem;
`;

const Title = styled.h1`
  font-family: var(--sans);
  font-size: var(--fontSizeSerif2);

  i {
    font-family: var(--serifItalic);
    opacity: 0.8;
  }
`;

const Author = styled.span`
  display: block;
  font-family: var(--sans);
  font-size: 1rem;
  line-height: 1;
  margin-bottom: .5rem;
  margin-left: 2px;
  opacity: .8;
  text-transform: uppercase;
`;

const Header = () => (
  <Wrapper>
    <Title>
      <Author>Jules Bourgoin’s</Author>
      <i>The Elements of</i> Arabic Art
    </Title>
  </Wrapper>
);

export default Header;
