import {useState, useEffect} from 'react';
import useSrcDimensions from './useSrcDimensions';

const useBackgroundWidth = (src, zoom, tileWidth = 200) => {
  const {height, width} = useSrcDimensions(src);
  const [renderedWidth, setRenderedWidth] = useState(tileWidth);
  const [renderedHeight, setRenderedHeight] = useState(tileWidth);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    // A tile should cover the same area
    // width * height = tileWidth ** 2;
    // width * (ratio * width) = tileWidth ** 2;
    // width ** 2 * ratio = tileWidth ** 2
    const ratio = height / width;
    const _renderedWidth = Math.sqrt(tileWidth ** 2 / ratio);

    const _scale = _renderedWidth / width;

    setRenderedWidth(_renderedWidth * zoom);
    setScale(_scale * zoom);
    setRenderedHeight(_scale * height * zoom);
  }, [height, width, tileWidth, zoom]);

  return {
    width: renderedWidth,
    height: renderedHeight,
    scale,
  };
};

export default useBackgroundWidth;
