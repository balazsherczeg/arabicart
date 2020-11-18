import React, {useState, useEffect, useCallback} from 'react';
import {node} from 'prop-types';

import {DataContext} from './context';

const svgs = {};

// console.log(process.argv[2]);

const DATA_URL = 'https://balazsherczeg.github.io/arabicart/';

const Loader = ({
  children,
}) => {
  const [allPatterns, setAllPatterns] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${DATA_URL}index.json`).then((result) => {
      result.json().then(({
        patterns,
        categories: loadedCategories,
      }) => {
        setAllPatterns(patterns);
        setCategories(loadedCategories);
      });
    });
  }, []);

  const getSvg = useCallback((id) => {
    if (svgs[id]) {
      return Promise.resolve(svgs[id]);
    }

    return fetch(`${DATA_URL}${id}.svg`).then(
      (result) => (
        result.text().then(
          (svg) => {
            svgs[id] = svg;
            return svg;
          },
        )
      ),
    );
  }, []);

  return (
    <DataContext.Provider
      value={{
        allPatterns,
        categories,
        getSvg,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

Loader.propTypes = {
  children: node.isRequired,
};

export default Loader;
