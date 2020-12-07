import React, {useRef, useEffect} from 'react';
import {bool, func, number, string} from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  --inactive: saturate(50%);
  cursor: pointer;

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }

  .guides {
    pointer-events: none;
  }

  ${({showGuides, scale}) => (
    showGuides && (`
      .guides {
        display: block;
        stroke-width: calc(1 / ${scale} * 1px);
      }
    `)
  )}
`;

const Selectable = ({
  onShapeClick,
  scale,
  selectedClass,
  showGuides,
  src,
}) => {
  const svgContainerRef = useRef(null);

  useEffect(() => {
    if (svgContainerRef.current) {
      const shapes = svgContainerRef.current.querySelectorAll('polygon, rect, path, polyline');
      shapes.forEach((shape) => {
        shape.addEventListener('click', onShapeClick);
      });
    }
  }, [svgContainerRef]);

  return (
    <Wrapper
      className="Selectable"
      dangerouslySetInnerHTML={{__html: src}}
      ref={svgContainerRef}
      scale={scale}
      selectedClass={selectedClass}
      showGuides={showGuides}
    />
  );
};

Selectable.propTypes = {
  onShapeClick: func.isRequired,
  scale: number.isRequired,
  selectedClass: string.isRequired,
  showGuides: bool,
  src: string.isRequired,
};

Selectable.defaultProps = {
  showGuides: false,
};

export default Selectable;
