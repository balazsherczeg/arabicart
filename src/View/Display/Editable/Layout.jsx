import React, {cloneElement} from 'react';
import {node, string} from 'prop-types';
import styled from 'styled-components';

import useTilesCount from './useTilesCount';

const Wrapper = styled.div`
  height: calc(100% - 2 * var(--rowHeight));
  background: yellow;
  overflow: hidden;
`;

const Inner = styled.div`
  ${({renderableWidth, tilesCount}) => (
    renderableWidth != null && `width: ${renderableWidth * tilesCount}px;`
  )}
  height: 100%;
`;

const Item = styled.div`
  float: left;
  ${({orientation, renderableWidth}) => (
    orientation === 'portrait'
      ? `height: 100%; width: ${renderableWidth}px`
      : 'width: 50%;'
  )}
`;

const Display = ({
  children,
  src,
}) => {
  const {
    ref,
    tilesCount,
    orientation,
    renderableWidth,
    scale,
  } = useTilesCount(src);

  return (
    <Wrapper
      ref={ref}
    >
      <Inner
        tilesCount={tilesCount}
        renderableWidth={renderableWidth}
      >
        {Array.from(Array(tilesCount)).map((key) => (
          <Item
            key={key}
            orientation={orientation}
            renderableWidth={renderableWidth}
          >
            {cloneElement(children, {scale})}
          </Item>
        ))}
      </Inner>
    </Wrapper>
  );
};

Display.propTypes = {
  children: node.isRequired,
  src: string.isRequired,
};

export default Display;
