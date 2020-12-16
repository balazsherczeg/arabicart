import React from 'react';
import {func, string} from 'prop-types';
import styled from 'styled-components';

import Button from './Button';

const svg = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" /></svg>';

const CloseButtonStyled = styled(Button)`
  background-image: url('data:image/svg+xml;utf8,${encodeURIComponent(svg)}');
`;

const CloseButton = ({
  className,
  onClick,
}) => (
  <CloseButtonStyled
    className={`${className} VMG__CloseButton`}
    onClick={onClick}
  />
);

CloseButton.propTypes = {
  className: string,
  onClick: func.isRequired,
};

CloseButton.defaultProps = {
  className: null,
};

export default CloseButton;
