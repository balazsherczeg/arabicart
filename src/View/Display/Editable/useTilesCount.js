import {useState, useEffect} from 'react';
import useDimensions from 'react-cool-dimensions';
import useSrcDimensions from '../../useSrcDimensions';
import useBackgroundWidth from '../../useBackgroundWidth';

const useTilesCount = (src, zoom) => {
  const [ratio, setRatio] = useState('landscape');
  const {height: srcHeight, width: srcWidth} = useSrcDimensions(src);
  const [columnsCount, setColumnsCount] = useState(0);
  const [rowsCount, setRowsCount] = useState(0);

  const {
    height: renderableHeight,
    width: renderableWidth,
    scale,
  } = useBackgroundWidth(src, zoom, 240);

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
    if (ref.current && wrapperWidth && wrapperHeight && renderableWidth && renderableHeight) {
      setColumnsCount(Math.ceil(wrapperWidth / renderableWidth));
      setRowsCount(Math.ceil(wrapperHeight / renderableHeight));
    }
  }, [
    ref,
    renderableHeight,
    renderableWidth,
    wrapperHeight,
    wrapperWidth,
    zoom,
  ]);

  return {
    orientation: ratio > 1 ? 'landscape' : 'portrait',
    ratio,
    ref,
    renderableWidth,
    renderableHeight,
    rowsCount,
    columnsCount,
    scale,
    srcHeight,
    srcWidth,
    tilesCount: columnsCount * rowsCount,
  };
};

export default useTilesCount;
