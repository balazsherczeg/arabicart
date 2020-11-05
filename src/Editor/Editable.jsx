import React, {useEffect, useState, useRef, useCallback} from 'react';
import {bool, func, node, number, object} from 'prop-types';
import styled from 'styled-components';

const Svg = styled.div`
  svg {
    height: calc(62vh);
    width: 100%;

    .guides {
      transition: .3s opacity;
    }
  }
`;

const Editable = ({
  svg,
  shapeGroups,
  showGuides,
  scale,
  onInit,
}) => {
  const ref = useRef(null);
  const [initialScale, setInitialScale] = useState(1);

  const getPattern = useCallback(
    () => ref.current && ref.current.querySelector('#pattern'),
    [],
  );

  const getGuides = useCallback(
    () => ref.current && ref.current.querySelector('#pattern .guides'),
    [],
  );

  const getAllShapes = useCallback(
    () => ref.current && ref.current.querySelectorAll('[class*="shape-"]'),
    [],
  );

  useEffect(() => {
    if (ref.current) {
      const initials = {};
      // Init guides

      const guides = getGuides();
      guides.style.display = 'block';
      guides.style.opacity = '0';

      // Init / reset scale

      setInitialScale(
        getPattern().getAttribute('patternTransform').replace('scale(', '').replace(')', '') * .4,
      );

      // Init / reset colors

      const shapes = getAllShapes();
      const shapeClassNames = {};
      shapes.forEach((shape) => {
        const c = [...shape.classList].find((className) => className.startsWith('shape-'));
        if (!shapeClassNames[c]) {
          const oneElement = ref.current.querySelector(`.${c}`);
          shapeClassNames[c] = window.getComputedStyle(oneElement, null).getPropertyValue('fill');
        }
      });

      initials.shapeGroups = shapeClassNames;

      onInit(initials);
    }
  }, [svg, ref, getGuides, getPattern, getAllShapes, onInit]);

  // Guides

  useEffect(() => {
    const guides = getGuides();
    if (guides) guides.style.opacity = (showGuides) ? '' : '0';
  }, [showGuides, getGuides]);

  // Colors

  useEffect(() => {
    Object.keys(shapeGroups).forEach((shapeGroupId) => {
      const shapeElements = ref.current.querySelectorAll(`.${shapeGroupId}`);
      shapeElements.forEach((shapeElement) => {
        // eslint-disable-next-line no-param-reassign
        shapeElement.style.fill = shapeGroups[shapeGroupId];
      });
    });
  }, [shapeGroups]);

  // Scale

  useEffect(() => {
    const pattern = getPattern();
    if (pattern) pattern.setAttribute('patternTransform', `scale(${scale * initialScale})`);
  }, [scale, initialScale, getPattern]);

  return (svg)
    ? <Svg ref={ref} dangerouslySetInnerHTML={{__html: svg.innerHTML}} />
    : null;
};

Editable.propTypes = {
  svg: node.isRequired,
  shapeGroups: object.isRequired,
  showGuides: bool.isRequired,
  scale: number.isRequired,
  onInit: func.isRequired,
};

export default Editable;
