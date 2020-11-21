import React, {useContext} from 'react';

import Editable from './Editable';
import Static from './Static';
import ControlContext from '../ControlContext';
import usePattern from '../../data/usePattern';
import {itemPropType} from '../../data/propTypes';

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

  const src = usePattern(id);

  const {
    shapeGroups,
    showGuides,
    strokeColor,
    strokeScale,
    editable,
  } = states[id] || {};

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

Display.propTypes = {
  item: itemPropType.isRequired,
};

export default Display;
