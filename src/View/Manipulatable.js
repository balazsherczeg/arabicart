function rgbToHex(rgbString) {
  const sep = rgbString.indexOf(',') > -1 ? ',' : ' ';
  const rgb = rgbString.substr(4).split(')')[0].split(sep);
  let r = (+rgb[0]).toString(16);
  let g = (+rgb[1]).toString(16);
  let b = (+rgb[2]).toString(16);

  if (r.length === 1) r = `0${r}`;
  if (g.length === 1) g = `0${g}`;
  if (b.length === 1) b = `0${b}`;

  return `#${r}${g}${b}`;
}

function setAttributes(element, attributes = {}) {
  Object.keys(attributes).forEach((property) => {
    element.setAttribute(property, attributes[property]);
  });
}

const Manipulatable = (src) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = src;
  wrapper.style.display = 'none';
  document.body.append(wrapper);

  const getSvg = () => wrapper.querySelector('svg');
  const getWidth = () => parseFloat(getSvg().getAttribute('width'));
  const getHeight = () => parseFloat(getSvg().getAttribute('height'));
  const getGuides = () => wrapper.querySelector('.guides');
  const getStyle = () => wrapper.querySelector('style');
  const getPattern = () => wrapper.querySelector('#pattern');
  const getShapes = () => wrapper.querySelectorAll('[class^="shape-"], [class*=" shape-"]');

  const getColors = () => {
    const colors = {};
    getShapes().forEach((shape) => {
      colors[shape.getAttribute('fill')] = true;
    });
    return Object.keys(colors);
  };

  const getLargestColorGroup = () => {
    let size = 0;
    let largestGroup = null;
    let largestColor = null;
    getColors().forEach((color) => {
      const elements = wrapper.querySelectorAll(`[fill="${color}"]`);
      const groupSize = [...elements].map((element) => element.outerHTML).join('').length;
      if (groupSize > size) {
        size = groupSize;
        largestColor = color;
        largestGroup = elements;
      }
    });

    return {
      largestGroup,
      largestGroupFill: largestColor,
    };
  };

  return {
    showGuides: () => {
      const guides = getGuides();
      if (guides) guides.style.display = 'block';
    },

    setGuideWidth: (scale) => {
      const guides = getGuides();
      if (guides) guides.style.strokeWidth = 1 / scale;
    },

    removeGuides: () => {
      const guides = getGuides();
      if (guides) guides.remove();
    },

    applyStroke: (strokeWidth, strokeColor) => {
      const lines = wrapper.querySelectorAll('.line');
      lines.forEach((element) => {
        element.setAttribute('stroke-width', strokeWidth);
        element.setAttribute('stroke', strokeColor);
      });
    },

    removeStyle: () => {
      // Style to attribute
      const allShapes = getShapes();
      allShapes.forEach((shape) => {
        const renderedFill = window.getComputedStyle(shape, null).getPropertyValue('fill');
        shape.setAttribute('fill', rgbToHex(renderedFill));
      });
      getStyle().remove();
    },

    applyFill: (fillColors) => {
      // Apply overwritten fills
      Object.keys(fillColors).forEach((shapeClass) => {
        const elements = wrapper.querySelectorAll(`.${shapeClass}`);
        elements.forEach((element) => {
          element.setAttribute('fill', fillColors[shapeClass]);
        });
      });

      // Remove style
    },

    optimize: () => {
      // Get largest group, copy its relevant attributes and delete it
      // const largestGroup = getLargestShapeGroup();
      const {largestGroup, largestGroupFill} = getLargestColorGroup();
      largestGroup.forEach((element) => element.remove());

      // Create a simple rectangle with the same color
      const offset = 0;
      const background = document.createElement('rect');
      setAttributes(background, {
        fill: largestGroupFill,
        stroke: 'none',
        x: `-${offset}`,
        y: `-${offset}`,
        width: getWidth() + 2 * offset,
        height: getHeight() + 2 * offset,
      });

      // And place it under other shapes
      getPattern().prepend(background);
    },

    applySize: (zoom) => {
      const svg = getSvg();
      const width = getWidth();
      const height = getHeight();
      setAttributes(svg, {
        width: width * zoom,
        height: height * zoom,
        viewBox: `0 0 ${width} ${height}`,
      });
      getPattern().setAttribute('transform', zoom);
    },

    getSrc: () => wrapper.innerHTML,
    cleanUp: () => wrapper.remove(),
  };
};

export default Manipulatable;
