import React from 'react';
import {string} from 'prop-types';

import Button from './Button';
import {svgToDom, download} from '../utils';

const Download = ({
  downloadable,
  id,
}) => {
  const handleClick = () => {
    const {guides, getInner, cleanUp} = svgToDom(downloadable);
    if (guides) guides.remove();
    download(
      getInner(),
      `Elements-of-Arabic-Art-${id}.svg`,
      'image/svg+xml',
    );
    cleanUp();
  };

  return (
    <Button onClick={handleClick}>Download</Button>
  );
};

Download.propTypes = {
  downloadable: string.isRequired,
  id: string.isRequired,
};

export default Download;
