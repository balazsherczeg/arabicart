import {useState, useEffect} from 'react';
import useDimensions from 'react-cool-dimensions';
import useSrcDimensions from '../useSrcDimensions';

const useTilesCount = (src, columns = 2, defaultRows = 4) => {
  const [tilesCount, setTilesCount] = useState(defaultRows);
  const [ratio, setRatio] = useState('landscape');
  const {height: srcHeight, width: srcWidth} = useSrcDimensions(src);
  const [scale, setScale] = useState(1);
  const [renderableWidth, setRenderableWidth] = useState(null);

  const {
    ref,
    width: wrapperWidth,
    height: wrapperHeight,
  } = useDimensions();

  useEffect(() => {
    if (srcWidth && srcHeight) {
      setRatio(srcWidth / srcHeight);
    }
  }, [srcWidth, srcHeight]);

  useEffect(() => {
    if (ref.current && wrapperWidth && wrapperHeight) {
      if (ratio >= 1) {
        const renderedScale = (wrapperWidth / columns) / srcWidth;
        const itemHeight = renderedScale * srcHeight;
        const rowsCount = Math.ceil(wrapperHeight / itemHeight);

        setScale(renderedScale);
        setTilesCount(rowsCount * columns);
      } else if (ratio < 1) {
        const renderedScale = wrapperHeight / srcHeight;
        const itemWidth = renderedScale * srcWidth;
        const columnsCount = Math.ceil(wrapperWidth / itemWidth);

        setScale(renderedScale);
        setTilesCount(columnsCount);
        setRenderableWidth(itemWidth);
      }
    }
  }, [
    columns,
    ref,
    srcHeight,
    srcWidth,
    ratio,
    wrapperHeight,
    wrapperWidth,
  ]);

  return {
    orientation: ratio > 1 ? 'landscape' : 'portrait',
    ratio,
    ref,
    renderableWidth,
    scale,
    srcHeight,
    srcWidth,
    tilesCount,
  };
};

export default useTilesCount;
