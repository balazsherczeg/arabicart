import React from 'react';
import {number, string} from 'prop-types';
import styled from 'styled-components';

const SvgContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Display = ({
  scale,
  svg,
}) => (
  <SvgContainer
    style={{
      backgroundImage: `url('data:image/svg+xml;utf8,${encodeURIComponent(svg)}')`,
      backgroundSize: `${scale * 100}%`,
    }}
  />
);

Display.propTypes = {
  scale: number.isRequired,
  svg: string.isRequired,
};

export default Display;
