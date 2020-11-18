import React from 'react';
import styled from 'styled-components';

import Navigation from '../Navigation';
import Logo from './Logo';
import useScroll from '../hooks/useScroll';

const Wrapper = styled.header`
  background: #fff;
  height: 96px;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
`;

const Inner = styled.div`
  position: relative;
  height: 96px;
`;

const Title = styled.h1`
  font-family: var(--sansBold);
  font-size: var(--fontSizeSerif2);
  opacity: 0.8;

  i {
    font-family: var(--serifItalic);
    margin-right: .3em;
  }

  b {
    font-weight: normal;
    font-size: .97em;
  }
`;

const Scaler = styled.div`
   transform-origin: 0 100%;
   position: absolute;
   bottom: 24px;
   left: 20px;
   display: flex;
`;

const LogoContainer = styled.div`
  width: 48px;
  height: 48px;
`;

const TextContainer = styled.div`
  padding-left: 8px;
`;

const Author = styled.span`
  display: block;
  font-family: var(--sansBold);
  font-size: 1rem;
  line-height: 1;
  margin-bottom: 6px;
  margin-left: 2px;
  opacity: .8;
  text-transform: uppercase;
  opacity: 0.8;
`;

const NavigationContainer = styled.div`
  position: absolute;
  right: 20px;
  bottom: 24px;
`;

const MAX_SCROLL = 500;

const getTitleMove = (scrollTop) => {
  const move = 10;
  return move * Math.min(scrollTop, MAX_SCROLL) / MAX_SCROLL;
};

const getTitleScale = (scrollTop) => {
  const minSize = 0.7;
  const scale = 1 - (Math.min(scrollTop / MAX_SCROLL, 1) * (1 - minSize));
  return scale;
};

const getWrapperPosition = (scrollTop) => {
  const move = 32;
  return move * Math.min(scrollTop, MAX_SCROLL) / MAX_SCROLL;
};

const getRotation = (scrollTop) => {
  const move = 180;
  return move * Math.min(scrollTop, MAX_SCROLL) / MAX_SCROLL;
};

const Header = () => {
  const {y: scrollTop} = useScroll();

  const titleMove = getTitleMove(scrollTop);
  const titleScale = getTitleScale(scrollTop);
  const wrapperPosition = getWrapperPosition(scrollTop);
  const rotation = getRotation(scrollTop);

  return (
    <Wrapper style={{transform: `translate3d(0, -${wrapperPosition}px, 0)`}}>
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

        <NavigationContainer style={{transform: `translate3d(0, ${titleMove}px, 0)`}}>
          <Navigation />
        </NavigationContainer>
      </Inner>
    </Wrapper>
  );
};

export default Header;
