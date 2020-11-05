import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  display: flex;
  padding: 1.5rem 1.5rem 3rem;
`;

const AuthorInfo = styled.div`
  width: 33.3333%;
  padding: .75rem;
  padding-top: 0;
  padding-bottom: 0;

  & > * {
    padding-left: .1rem;
  }

  h2 {
    font-family: var(--sans);
  }
`;

const Footer = () => (
  <Wrapper>
    <AuthorInfo>
      <h2>Jules Bourgoin</h2>
      <p>was a&#8230;</p>
    </AuthorInfo>
    <AuthorInfo>
      <h2>Balázs Herczeg</h2>
      <p>is a web-designer, who considers the best way to read this book is to redraw a pattern every day. And make it available under Creative Common Licence.</p>
    </AuthorInfo>
  </Wrapper>
);

export default Footer;