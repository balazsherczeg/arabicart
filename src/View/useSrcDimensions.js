import {useState, useEffect} from 'react';

const useSrcDimensions = (src) => {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);

  useEffect(() => {
    if (src) {
      setWidth(src.match(/width="([^"]*)"/)[1]);
      setHeight(src.match(/height="([^"]*)"/)[1]);
    }
  }, [src]);

  return {
    height,
    width,
  };
};

export default useSrcDimensions;
