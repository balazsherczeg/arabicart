import {useState} from 'react';

let swatches = ["#ff0000", "#00ff00", "#00ffff"];

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
