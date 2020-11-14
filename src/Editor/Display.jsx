import React from 'react';
import {number, string} from 'prop-types';
import styled from 'styled-components';

const SvgContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Display = ({
  size,
  svg,
}) => (
  <SvgContainer
    style={{
      backgroundImage: `url('data:image/svg+xml;utf8,${encodeURIComponent(svg)}')`,
      backgroundSize: `${size}px`,
    }}
  />
);

Display.propTypes = {
  size: number.isRequired,
  svg: string.isRequired,
};

export default Display;
