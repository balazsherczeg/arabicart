import React from 'react';
import {func, string} from 'prop-types';
import styled from 'styled-components';

const Cover = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  z-index: 100;
`;

const Scrim = ({
  background,
  onClick,
}) => (
  <Cover
    onClick={onClick}
    style={{background}}
  />
);

Scrim.propTypes = {
  background: string.isRequired,
  onClick: func.isRequired,
};

export default Scrim;
