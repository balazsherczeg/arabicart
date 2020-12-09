import React from 'react';
import {objectOf, number, string} from 'prop-types';

import Button from './Button';
import Manipulatable from '../Manipulatable';
import {download} from '../utils';
import useBackgroundWidth from '../useBackgroundWidth';

const Download = ({
  src,
  id,
  fillColors,
  strokeWidth,
  strokeColor,
  zoom,
}) => {
  const {scale} = useBackgroundWidth(src, zoom, 240);

  const handleClick = () => {
    const manipulatable = Manipulatable(src);
    manipulatable.removeGuides();
    manipulatable.removeStyle();
    if (fillColors) manipulatable.applyFill(fillColors);
    if (strokeWidth) manipulatable.applyStroke(strokeWidth, strokeColor);
    manipulatable.optimize();
    if (scale !== 1) manipulatable.applySize(scale);

    download(
      manipulatable.getSrc(),
      `Elements-of-Arabic-Art-${id}.svg`,
      'image/svg+xml',
    );
    manipulatable.cleanUp();
  };

  return (
    <Button onClick={handleClick}>Download</Button>
  );
};

Download.propTypes = {
  src: string.isRequired,
  id: string.isRequired,
  fillColors: objectOf(string),
  strokeWidth: number,
  strokeColor: string,
  zoom: number,
};

Download.defaultProps = {
  fillColors: null,
  strokeWidth: null,
  strokeColor: null,
  zoom: 1,
};

export default Download;
