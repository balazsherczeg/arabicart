import React, {useState, useEffect} from 'react';
import {arrayOf, func, number, object} from 'prop-types';
import styled from 'styled-components';
import {useSwipeable} from 'react-swipeable';

import Item from './Item';
import Buttons from './Buttons';
import Control from '../../View/Control';
import preloadPattern from '../../data/preloadPattern';

const Wrapper = styled.div`
  background: rgba(255, 255, 255, .9);
  height: 100vh;
  overflow: hidden;
  width: 100vw;
  position: relative;
  touch-action: pan-y;
 `;

const Main = styled.div`
  position: absolute;
  height: 100vh;
  transition: transform 1s;
`;

const Carrousel = ({
  index: startIndex,
  onClose,
  items,
}) => {
  const [index, setIndex] = useState(startIndex);
  const [renderables, setRenderables] = useState([startIndex]);
  const [showButtons, setShowButtons] = useState(true);

  const getCarrouselStyle = () => ({
    width: `${items.length * 100}vw`,
    transform: `translate3d(-${index * 100}vw, 0, 0)`,
  });

  const preload = (preloadableIndex) => {
    const preloadableId = items[preloadableIndex] && items[preloadableIndex].id || null;
    if (preloadableId) preloadPattern(preloadableId);
  }

  // Disable scroll

  useEffect(() => {
    const {scrollX, scrollY} = window;
    window.onscroll = () => window.scrollTo(scrollX, scrollY);
    return () => window.onscroll = () => {};
  }, []);

  // Preload

  useEffect(() => {
    preload(index - 1);
    preload(index + 1);
  }, [index]);

  const firstFrame = index === 0;
  const lastFrame = index === items.length - 1;

  const toggleCarrousel = (value) => {setShowButtons(!!value);};

  // Buttons

  const handleClick = (nextIndex) => {
    setIndex(nextIndex);
    const nextRenderables = [...renderables];
    nextRenderables.push(nextIndex);
    if (nextRenderables.length > 2) nextRenderables.shift();
    setRenderables(nextRenderables);
  };

  const handleNextClick = () => {
    handleClick(index + 1);
  };

  const handlePrevClick = () => {
    handleClick(index - 1);
  };

  // Keyboard

  const handleKeyDown = (event) => {
    switch (event.keyCode) {
      case 27: // Escape
        onClose();
        break;
      case 39: // Right arrow
        if (!lastFrame) handleNextClick();
        break;
      case 37: // Left arrow
        if (!firstFrame) handlePrevClick();
        break;
      // No default
      }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  });

  // Gestures

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNextClick,
    onSwipedRight: handlePrevClick,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <Wrapper
      {...swipeHandlers}
    >
      {showButtons && (
        <Buttons
          onPrev={handlePrevClick}
          onNext={handleNextClick}
          onClose={onClose}
          showPrev={!firstFrame}
          showNext={!lastFrame}
        />
      )}

      <Control
        id={items[index].id}
      >
        <Main
          style={getCarrouselStyle()}
        >
          {renderables.map((renderableIndex) => (
            <Item
              item={items[renderableIndex]}
              index={renderableIndex}
              key={renderableIndex}
              toggleCarrousel={toggleCarrousel}
            />
          ))}
        </Main>
      </Control>
    </Wrapper>
  );
};

Carrousel.propTypes = {
  items: arrayOf(object),
  index: number.isRequired,
  onClose: func.isRequired,
};

Carrousel.defaultProps = {
  items: [],
};

export default Carrousel;
