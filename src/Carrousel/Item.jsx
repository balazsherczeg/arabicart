import React, {useState, useEffect, useContext} from 'react';
import {shape, string, number} from 'prop-types';
import styled from 'styled-components';

import {DataContext} from '../context';
import Editor from '../Editor';

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
  item: {
    id,
  },
}) => {
  const [src, setSrc] = useState(null);
  const {getSvg} = useContext(DataContext);

  useEffect(() => {
    if (!src) {
      getSvg(id).then((svg) => {
        setSrc(svg);
      });
    }
  }, [src, id]); /* eslint-disable-line */

  return (
    <Main
      style={{
        left: getOffset(index),
      }}
    >
      <Inner>
        <Editor
          src={src}
          item={item}
        />
      </Inner>
    </Main>
  );
};

Item.propTypes = {
  index: number.isRequired,
  item: shape({
    id: string.isRequired,
  }).isRequired,
};

export default Item;
