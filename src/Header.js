import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import useScroll from './hooks/useScroll';

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
  height: 100%;
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

const getTitleMove = (scrollTop) => {
  const maxScroll = 300;
  const move = 10;
  return move * Math.min(scrollTop, maxScroll) / maxScroll;
};

const getTitleScale = (scrollTop) => {
  const maxScroll = 500;
  const minSize = 0.7;
  return 1 - (Math.min((scrollTop / maxScroll), 1 - minSize));
};

const getWrapperPosition = (scrollTop) => {
  const maxScroll = 250;
  const move = 32;
  return move * Math.min(scrollTop, maxScroll) / maxScroll;
};

const Header = () => {
  const {y: scrollTop} = useScroll();

  const titleMove = getTitleMove(scrollTop);
  const titleScale = getTitleScale(scrollTop);
  const wrapperPosition = getWrapperPosition(scrollTop);

  return (
    <Wrapper style={{transform: `translate3d(0, -${wrapperPosition}px, 0)`}}>
      <Inner>
        <Scaler
          style={{
            transform: `scale3d(${titleScale}, ${titleScale}, 1) translate3d(0, ${titleMove}px, 0)`,
          }}
        >
          <Author>Jules Bourgoin’s</Author>
          <Title>
            <i>The Elements of</i>
            <b>Arabic Art</b>
          </Title>
        </Scaler>

        <NavigationContainer style={{transform: `translate3d(0, ${titleMove}px, 0)`}}>
          <Navigation />
        </NavigationContainer>
      </Inner>
    </Wrapper>
  );
};

export default Header;
