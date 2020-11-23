import {useEffect, useState} from 'react';
import {DATA_URL} from './constants';

const srcs = {};

const usePattern = (id) => {
  const [, setLoaded] = useState(false);

  useEffect(() => {
    if (!srcs[id]) {
      fetch(`${DATA_URL}${id}.svg`).then(
        (result) => (
          result.text().then(
            (svg) => {
              srcs[id] = svg;
              setLoaded(true);
            },
          )
        ),
      );
    }
  });

  return srcs[id];
};

export default usePattern;
