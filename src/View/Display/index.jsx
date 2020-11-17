import React, {useState, useContext, useEffect} from 'react';

import Editable from './Editable';
import Static from './Static';
import ControlContext from '../ControlContext';
import {DataContext} from '../../context';

const Display = ({
  item: {
    id,
    width,
    scale: initialScale,
  },
}) => {
  const {
    onChange,
    onInit,
    scale,
    // editable,
    // shapeGroups,
    // showGuides,
    // strokeColor,
    // strokeScale,

    states,
  } = useContext(ControlContext);

  const {getSvg} = useContext(DataContext);
  const [src, setSrc] = useState(null);

  const {
    shapeGroups,
    showGuides,
    strokeColor,
    strokeScale,
    editable,
  } = states[id] || {};

  useEffect(() => {
    getSvg(id).then((svg) => {
      setSrc(svg);
    });
  }, [src, id]); /* eslint-disable-line */

  return (
    editable ? (
      <Editable
        onChange={onChange}
        onInit={onInit}
        scale={scale}
        shapeGroups={shapeGroups}
        shouldScale={initialScale}
        showGuides={showGuides}
        src={src}
        strokeColor={strokeColor}
        strokeScale={strokeScale}
        width={width}
      />
    ) : (
      <Static
        scale={scale * initialScale}
        showGuides={showGuides}
        src={src}
        width={width}
      />
    )
  );
};

export default Display;
