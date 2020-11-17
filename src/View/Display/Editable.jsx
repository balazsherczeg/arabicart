import React, {useEffect, useState} from 'react';
import {bool, func, string, number, object} from 'prop-types';

import Static from './Static';
import {svgToDom} from '../utils';

const Editable = ({
  src,
  shapeGroups,
  showGuides,
  scale,
  shouldScale,
  onInit,
  onChange,
  strokeColor,
  strokeScale,
  width,
}) => {
  const [svg, setSvg] = useState(null);
  const [s, setS] = useState(src);
  const [initialStrokeWidth, setInitialStrokeWidth] = useState(null);

  // Update

  const handleChange = (inner) => {
    setS(inner);
    onChange(inner);
  };

  useEffect(() => { /* eslint-disable-line consistent-return */
    if (!svg && src) {
      const svgInDom = svgToDom(src, handleChange);
      setSvg(svgInDom);
      setS(svgInDom.inner);

      return svgInDom.cleanUp;
    }
  }, [src]); /* eslint-disable-line */

  useEffect(() => {
    if (svg) {
      // Init / reset colors
      const initials = {};
      initials.shapeGroups = svg.getShapeGroups();
      onInit(initials);

      // Initial stroke width
      const strokeWidth = svg.getStrokeWidth();
      setInitialStrokeWidth(parseFloat(strokeWidth));
    }
  }, [svg]); /* eslint-disable-line */

  // Fill colors

  useEffect(() => {
    svg && svg.setFillColor(shapeGroups);
  }, [shapeGroups]); // eslint-disable-line

  // Stroke color

  useEffect(() => {
    svg && svg.setStrokeColor(strokeColor);
  }, [strokeColor]); // eslint-disable-line

  // Stroke width

  useEffect(() => {
    svg && svg.setStrokeWidth(strokeScale * initialStrokeWidth);
  }, [strokeScale]); // eslint-disable-line

  return (s)
    ? (
      <Static
        src={s}
        scale={scale * shouldScale}
        width={width}
        showGuides={showGuides}
      />
    )
    : null;
};

Editable.propTypes = {
  onChange: func.isRequired,
  onInit: func.isRequired,
  scale: number.isRequired,
  shapeGroups: object.isRequired,
  shouldScale: number.isRequired,
  showGuides: bool.isRequired,
  src: string.isRequired,
  strokeColor: string.isRequired,
  strokeScale: number.isRequired,
  width: number.isRequired,
};

export default Editable;
