import React from 'react';
import styled from 'styled-components';

import Cc from './assets/cc.svg';
import By from './assets/by.svg';
import ShopLink from './ShopLink';

const Wrapper = styled.footer`
  --columnWidth: calc(100% / var(--columns) - 1rem);

  display: flex;
  flex-wrap: wrap;
  font-family: var(--serif);
  justify-content: space-between;
  padding: 1.5rem 1.5rem 3rem;

  p {
    margin-bottom: 1.5rem;
  }

  display: grid;
  grid-template-columns: repeat(auto-fill, var(--columnWidth));
  grid-template-rows: auto;
  grid-gap: var(--gutter);
  grid-template-areas: var(--footerLayout);
`;

const A = styled.a`
  &, &:visited {
    color: var(--accentColor);
    text-decoration: none;
  }
`;

const Column = styled.div`
  flex-basis: var(--columnWidth);
  padding: 0 .5rem;
  box-sizing: border-box;

  h2 {
    font-family: var(--sansBold);
    font-size: calc(18rem / 16);
    margin-bottom: 1rem;
  }

  i {
    font-family: var(--serifItalic);
  }

  &.bio-1 {
    grid-area: slot-1;
  }

  &.bio-2 {
    grid-area: slot-2;
  }

  &.colophon {
    grid-area: slot-3;
  }
`;

const LicenceIcon = styled.img`
  width: 24px;
  margin-right: 4px;
`;

/* eslint-disable */
const Footer = () => (
  <Wrapper>
    <Column className="bio-1">
      <h2>Jules Bourgoin</h2>
      <p>
        was a researcher of Islamic ornamental art. An author of several books on the theory of ornaments,
        in 1879 he published <A href="https://archive.org/details/gri_33125012261786">
        <i>Les Eléments de l’art arabe</i></A>, a book featuring construction plans for about 190 ornamental patterns.
      </p>
    </Column>

    <Column className="bio-2">
      <h2>Balázs Herczeg</h2>
      <p>
        is a designer and web developer, and has an affinity with <A href="https://play.google.com/store/apps/details?id=com.kolamapp.kolam">geometric patterns</A>. He started to read this remarkable book. The reading soon turned to redrawing, then continued as this digital edition.
      </p>
      <p>Currently, he is available for hire. Feel free to <A href="mailto:balazs@herczeg.ee">contact him</A>.</p>
    </Column>

    <Column className="colophon">
      <h2>Colophon</h2>
      <p>
        Typeset in <A href="https://fonts.google.com/specimen/Montserrat">Montserrat</A> and <A href="https://fontlibrary.org/en/font/libre-bodoni">Libre Bodoni</A>. <A href="https://github.com/balazsherczeg/arabicart-patterns">Patterns</A> and <A href="https://github.com/balazsherczeg/arabicart">site</A> reposited on GitHub. Built with <A href="https://reactjs.org/">React</A>, on <A href="https://www.gatsbyjs.com/">Gatsby</A>.
      </p>
      <p>
        Say hello: <A href="mailto:balazs@herczeg.ee">balazs@herczeg.ee</A>
      </p>

      <p>
        <ShopLink />
      </p>

      <p>
        <A
          rel="license"
          href="http://creativecommons.org/licenses/by/4.0/"
          title="This work is licensed under a Creative Commons Attribution 4.0 International License."
        >
          <LicenceIcon src={Cc} />
          <LicenceIcon src={By} />
        </A>
      </p>
    </Column>
  </Wrapper>
);
/* eslint-enable */

export default Footer;
