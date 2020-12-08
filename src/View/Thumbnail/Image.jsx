import React from 'react';
import {string} from 'prop-types';
import styled from 'styled-components';

import usePattern from '../../data/usePattern';
import useBackgroundWidth from '../useBackgroundWidth';

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
  id,
}) => {
  const src = usePattern(id);
  const {width} = useBackgroundWidth(src, 1, 100);

  if (src && width) {
    return (
      <$Image
        style={{
          backgroundImage: `url('data:image/svg+xml;utf8,${encodeURIComponent(src)}')`,
          backgroundSize: `${width}px`,
        }}
      />
    );
  }

  return null;
};

Image.propTypes = {
  id: string.isRequired,
};

export default Image;
