import React from 'react';
import styled from 'styled-components';

import Navigation from '../Navigation';
import Logo from './Logo';
import useScroll from '../hooks/useScroll';

const Wrapper = styled.header`
  @media only screen and (max-width: 599px) {
    --horizontalPadding: .75rem;
    --navigationBottom: 24px;
    font-size: .66666rem;
    height: 5rem;
  }

  @media only screen and (min-width: 600px) {
    --horizontalPadding: 1.25rem;
    --navigationBottom: 32px;
    font-size: 1rem;
    height: 6rem;
  }

  background: #ffffff;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
`;

const Inner = styled.div`
  position: relative;
  height: 100%;
`;

const Scaler = styled.div`
   transform-origin: 0 100%;
   position: absolute;
   bottom: 24px;
   left: var(--horizontalPadding);
   display: flex;
`;

const LogoContainer = styled.div`
  width: 3em;
  height: 3em;
`;

const TextContainer = styled.div`
  padding-left: 8px;
  height: 3em;
`;

const Author = styled.span`
  display: block;
  font-family: var(--sansBold);
  font-size: 1em;
  line-height: 1em;
  margin-bottom: 0.375em;
  margin-left: 0.125em;
  opacity: .9;
  text-transform: uppercase;
  opacity: 0.8;
`;

const Title = styled.h1`
  font-family: var(--sansBold);
  font-size: 1.875em;
  line-height: .8em;
  opacity: 0.8;

  i {
    font-family: var(--serifItalic);
    margin-right: .3em;
  }

  b {
    font-weight: normal;
    font-size: .97em;
    opacity: 0.9;
  }
`;

const NavigationContainer = styled.div`
  position: absolute;
  right: var(--horizontalPadding);
  bottom: var(--navigationBottom);
`;

const MAX_SCROLL = 1000;

const moveWithScroll = (scrollTop, move) => move * Math.min(scrollTop, MAX_SCROLL) / MAX_SCROLL;

const getTitleScale = (scrollTop) => {
  const minSize = 0.7;
  const scale = 1 - (Math.min(scrollTop / MAX_SCROLL, 1) * (1 - minSize));
  return scale;
};

const getRotation = (scrollTop) => {
  const move = 180;
  return move * scrollTop / MAX_SCROLL;
};

const Header = () => {
  const {y: scrollTop} = useScroll();

  const titleMove = moveWithScroll(scrollTop, 10);
  const navigationMove = moveWithScroll(scrollTop, 16);
  const wrapperPosition = moveWithScroll(scrollTop, 2);
  const titleScale = getTitleScale(scrollTop);
  const rotation = getRotation(scrollTop);

  return (
    <Wrapper style={{transform: `translate3d(0, -${wrapperPosition}em, 0)`}}>
      <Inner>
        <Scaler
          style={{
            transform: `scale3d(${titleScale}, ${titleScale}, 1) translate3d(0, ${titleMove}px, 0)`,
          }}
        >
          <LogoContainer style={{transform: `rotate3d(0, 0, 1, -${rotation}deg)`}}>
            <Logo />
          </LogoContainer>

          <TextContainer>
            <Author>Jules Bourgoin’s</Author>
            <Title>
              <i>The Elements of</i>
              <b>Arabic Art</b>
            </Title>
          </TextContainer>
        </Scaler>

        <NavigationContainer style={{transform: `translate3d(0, ${navigationMove}px, 0)`}}>
          <Navigation />
        </NavigationContainer>
      </Inner>

    </Wrapper>
  );
};

export default Header;
