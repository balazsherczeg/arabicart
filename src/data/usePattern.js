import {useEffect, useState} from 'react';

const srcs = {};

const usePattern = (id) => {
  const [, setLoaded] = useState(false);

  useEffect(() => {
    if (!srcs[id]) {
      fetch(`${process.env.DATA_URL}${id}.svg`).then(
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
  }, []);

  return srcs[id];
};

export default usePattern;
