import React, {useEffect, useState} from 'react';
import {bool, func, string, number, object} from 'prop-types';
import styled from 'styled-components';

import Display from './Display';
import UpdateWithoutBlink from './UpdateWithoutBlink';

const Wrapper = styled.div`
  position: relative;
  height: 100%;
`;

const getGuides = (svg) => svg.querySelector('.guides');

const getAllShapes = (svg) => svg.querySelectorAll('[class*="shape-"]');

const getSvg = (svg) => svg.querySelector('svg');

const Editable = ({
  src,
  shapeGroups,
  showGuides,
  scale,
  initialScale: shouldScale,
  onInit,
  onChange,
}) => {
  const [svg, setSvg] = useState(null);
  const [s, setS] = useState(src);

  useEffect(() => { /* eslint-disable-line consistent-return */
    if (!svg && src) {
      const div = document.createElement('div');
      div.innerHTML = src;
      div.style.display = 'none';
      document.body.append(div);
      setSvg(div);
      setS(div.innerHTML);

      return () => {
        div.remove();
      };
    }
  }, [src]); /* eslint-disable-line */

  useEffect(() => {
    if (svg) {
      const initials = {};
      // Init / reset colors

      const shapes = getAllShapes(svg);
      const shapeClassNames = {};
      shapes.forEach((shape) => {
        const c = [...shape.classList].find((className) => className.startsWith('shape-'));
        if (!shapeClassNames[c]) {
          const oneElement = svg.querySelector(`.${c}`);
          shapeClassNames[c] = window.getComputedStyle(oneElement, null).getPropertyValue('fill');
        }
      });

      initials.shapeGroups = shapeClassNames;
      initials.downloadable = svg.innerHTML;

      onInit(initials);
    }
  }, [svg]); /* eslint-disable-line */

  const update = () => {
    setS(svg.innerHTML);
    onChange(svg.innerHTML);
  };

  // Guides

  useEffect(() => {
    if (svg) {
      const guides = getGuides(svg);
      guides.style.display = (showGuides) ? 'block' : '';
      update();
    }
  }, [showGuides]);

  // Update guide width, if scale changes, it should always be 1px on screen

  useEffect(() => {
    if (svg) {
      const guides = getGuides(svg);
      guides.style.strokeWidth = 1 / (scale * shouldScale);
      setS(svg.innerHTML);
    }
  }, [svg, scale, shouldScale]);

  // Colors

  useEffect(() => {
    Object.keys(shapeGroups).forEach((shapeGroupId) => {
      const shapeElements = svg.querySelectorAll(`.${shapeGroupId}`);
      shapeElements.forEach((shapeElement) => {
        // eslint-disable-next-line no-param-reassign
        shapeElement.style.fill = shapeGroups[shapeGroupId];
      });
      update();
    });
  }, [shapeGroups]);

  // Scale

  return (s)
    ? (
      <Wrapper>
        <UpdateWithoutBlink>
          <Display
            svg={s}
            size={scale * shouldScale * getSvg(svg).getAttribute("width")}
          />
        </UpdateWithoutBlink>
      </Wrapper>
    )
    : null;
};

Editable.propTypes = {
  initialScale: number.isRequired,
  onChange: func.isRequired,
  onInit: func.isRequired,
  scale: number.isRequired,
  shapeGroups: object.isRequired,
  showGuides: bool.isRequired,
  src: string.isRequired,
};

export default Editable;
