import React from 'react';
import {number, object} from 'prop-types';
import styled from 'styled-components';

import Display from '../../View/Display';

const getOffset = (index) => `${index * 100}vw`;

const Main = styled.div`
  box-sizing: border-box;
  height: 100vh;
  padding: 0;
  position: absolute;
  width: 100vw;
  z-index: 10;
`;

const Inner = styled.div`
  width: 100%;
  height: 100%;

  & > * {
    flex: none;
  }
`;

const Item = ({
  index,
  item,
  toggleCarrousel,
}) => {
  return (
    <Main
      style={{
        left: getOffset(index),
      }}
    >
      <Inner>
        <Display
          id={item.id}
          onEditable={toggleCarrousel}
        />
      </Inner>
    </Main>
  );
};

Item.propTypes = {
  index: number.isRequired,
  item: object.isRequired,
};

export default Item;
