import React, {useState} from 'react';
import {arrayOf, func, number, object} from 'prop-types';
import styled from 'styled-components';

import Item from './Item';
import Buttons from './Buttons';
import Control from '../View/Control';

const Wrapper = styled.div`
  background: rgba(255, 255, 255, .9);
  height: 100vh;
  overflow: hidden;
  width: 100vw;
  position: relative;
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

  const getCarrouselStyle = () => ({
    width: `${items.length * 100}vw`,
    transform: `translate3d(-${index * 100}vw, 0, 0)`,
  });

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

  const firstFrame = index === 0;
  const lastFrame = index === items.length - 1;

  return (
    <Wrapper>
      <Buttons
        onPrev={handlePrevClick}
        onNext={handleNextClick}
        onClose={onClose}
        showPrev={!firstFrame}
        showNext={!lastFrame}
      />
      <Control
        item={items[index]}
      >
        <Main
          style={getCarrouselStyle()}
        >
          {renderables.map((renderableIndex) => (
            <Item
              item={items[renderableIndex]}
              index={renderableIndex}
              key={renderableIndex}
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
