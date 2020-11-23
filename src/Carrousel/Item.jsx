import React from 'react';
import {number} from 'prop-types';
import styled from 'styled-components';

import {itemPropType} from '../data/propTypes';
import Display from '../View/Display';

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
}) => {
  return (
    <Main
      style={{
        left: getOffset(index),
      }}
    >
      <Inner>
        <Display
          item={item}
        />
      </Inner>
    </Main>
  );
};

Item.propTypes = {
  index: number.isRequired,
  item: itemPropType.isRequired,
};

export default Item;
