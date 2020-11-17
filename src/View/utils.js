export const svgToDom = (
  src,
  handleChange = () => {},
) => {
  const outer = document.createElement('div');
  outer.innerHTML = src;
  outer.style.display = 'none';
  document.body.append(outer);
  const lines = outer.querySelectorAll('.line');
  const inner = outer.innerHTML;
  const guides = outer.querySelector('.guides');

  const onChange = () => handleChange(outer.innerHTML);

  return {
    outer,
    inner,
    getInner: () => outer.innerHTML,
    cleanUp: () => outer.remove(),
    guides,
    lines,
    getStrokeWidth: () => (
      window.getComputedStyle(lines[0], null).getPropertyValue('stroke-width')
    ),
    getShapeGroups: () => {
      const shapes = outer.querySelectorAll('[class*="shape-"]');
      const shapeGroups = {};
      shapes.forEach((shape) => {
        const c = [...shape.classList].find((className) => className.startsWith('shape-'));
        if (!shapeGroups[c]) {
          const oneElement = outer.querySelector(`.${c}`);
          shapeGroups[c] = window.getComputedStyle(oneElement, null).getPropertyValue('fill');
        }
      });
      return shapeGroups;
    },

    // Setters
    setStrokeWidth: (value) => {
      lines.forEach((line) => {
        // eslint-disable-next-line no-param-reassign
        line.style.strokeWidth = value;
      });
      onChange();
    },
    setStrokeColor: (value) => {
      lines.forEach((line) => {
        // eslint-disable-next-line no-param-reassign
        line.style.stroke = value;
      });
      onChange();
    },
    setGuideWidth: (value) => {
      if (guides) {
        guides.style.strokeWidth = value;
        onChange();
      }
    },
    toggleGuides: (showGuides) => {
      guides.style.display = (showGuides) ? 'block' : '';
      onChange();
    },
    showGuides: () => {
      if (guides) {
        guides.style.display = 'block';
        onChange();
      }
    },
    setFillColor: (fillColors) => {
      Object.keys(fillColors).forEach((shapeGroupId) => {
        const shapeElements = outer.querySelectorAll(`.${shapeGroupId}`);
        shapeElements.forEach((shapeElement) => {
          // eslint-disable-next-line no-param-reassign
          shapeElement.style.fill = fillColors[shapeGroupId];
        });
      });
      onChange();
    },
  };
};

export const download = (data, fileName, type) => {
  const a = document.createElement('a');
  a.style.display = 'none';
  document.body.appendChild(a);

  a.href = window.URL.createObjectURL(
    new Blob([data], {type}),
  );

  a.setAttribute('download', fileName);

  a.click();

  window.URL.revokeObjectURL(a.href);
  document.body.removeChild(a);
};
