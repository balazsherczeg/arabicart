import {useState, useEffect} from 'react';
import useSrcDimensions from './useSrcDimensions';

const useBackgroundWidth = (src, tileWidth = 200) => {
  const {height, width} = useSrcDimensions(src);
  const [backgroundWidth, setBackgroundWidth] = useState(tileWidth);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const bw = (width > height)
      ? tileWidth
      : width / height * tileWidth;

    setBackgroundWidth(bw);
    setScale(bw / width);
  }, [height, width, tileWidth]);

  return {
    backgroundWidth,
    scale,
  };
};

export default useBackgroundWidth;
