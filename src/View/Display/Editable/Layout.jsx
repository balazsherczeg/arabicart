import React, {cloneElement} from 'react';
import {node, number, string} from 'prop-types';
import styled from 'styled-components';

import useTilesCount from './useTilesCount';

const Wrapper = styled.div`
  height: 100%;
  overflow: hidden;
`;

const Inner = styled.div`
  ${({renderableWidth, columnsCount}) => (
    renderableWidth != null && `width: ${Math.ceil(renderableWidth * columnsCount)}px;`
  )}
  height: 100%;
`;

const Item = styled.div`
  float: left;
  ${({renderableHeight, renderableWidth}) => (`
    height: ${renderableHeight};
    width: ${renderableWidth}px
  `)}
`;

const Layout = ({
  children,
  src,
  zoom,
}) => {
  const {
    ref,
    tilesCount,
    columnsCount,
    renderableWidth,
    renderableHeight,
    scale,
  } = useTilesCount(src, zoom);

  return (
    <Wrapper
      ref={ref}
    >
      <Inner
        columnsCount={columnsCount}
        renderableWidth={renderableWidth}
      >
        {Array.from(Array(tilesCount)).map((key) => (
          <Item
            key={key}
            renderableWidth={renderableWidth}
            renderableHeight={renderableHeight}
          >
            {cloneElement(children, {scale})}
          </Item>
        ))}
      </Inner>
    </Wrapper>
  );
};

Layout.propTypes = {
  children: node.isRequired,
  src: string.isRequired,
  zoom: number.isRequired,
};

export default Layout;
