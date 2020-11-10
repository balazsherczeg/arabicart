import React, {useState, useEffect, useCallback} from 'react';
import {node} from 'prop-types';

import {DataContext} from './context';

const svgs = {};

const Loader = ({
  children,
}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      fetch('/data/index.json', {
        mode: 'no-cors',
      }).then((result) => {
        result.json().then(({patterns}) => {
          setData([...patterns].reverse());
        });
      });
    };
    fetchData();
  }, []);

  const getSvg = useCallback((id) => {
    if (svgs[id]) {
      return Promise.resolve(svgs[id]);
    }

    return fetch(`/data/${id}.svg`).then(
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
        data,
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
