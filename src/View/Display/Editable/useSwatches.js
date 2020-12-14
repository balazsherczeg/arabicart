import {useState} from 'react';

let swatches = [
  '#443430',
  '#BF402B',
  '#CEA600',
  '#4D9BA3',
  '#216554',
  '#262F66',
];

const useSwatches = () => {
  const [s, setS] = useState(swatches);

  const setSwatch = (color) => {
    if (color) {
      swatches = [...swatches, color];
    }
    setS(swatches);
  };

  return [
    s,
    setSwatch,
  ];
};

export default useSwatches;
