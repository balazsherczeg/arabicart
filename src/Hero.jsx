import React from 'react';
import styled from 'styled-components';

const $Hero = styled.div`
  --headerHeight: 6rem;
  background-color: #666;
  background: url('/patterns/animated-47.svg');
  height: 50vh;
  background-size: 25vh;
  background-position: 0 var(--headerHeight);
  margin-top: calc(-1 * var(--headerHeight));
  padding-top: var(--headerHeight);
`;

const Hero = () => (
  <$Hero />
);

export default Hero;
