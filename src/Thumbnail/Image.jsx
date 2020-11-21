import React from 'react';
import styled from 'styled-components';

import usePattern from '../data/usePattern';
import {itemPropType} from '../data/propTypes';

const $Image = styled.div`
  border: .5rem #fff solid;
  box-sizing: border-box;
  cursor: pointer;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const Image = ({
  item: {
    id,
    scale,
    width,
  },
}) => {
  const src = usePattern(id);

  return (
    <$Image
      style={{
        backgroundImage: `url('data:image/svg+xml;utf8,${encodeURIComponent(src)}')`,
        backgroundSize: `${scale * width}px`,
      }}
    />
  );
};

Image.propTypes = {
  item: itemPropType.isRequired,
};

export default Image;
