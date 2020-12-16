import {useEffect} from 'react';

let data = null;
let loadStarted = false;

const useData = () => {
  useEffect(() => {
    if (data === null && loadStarted === false) {
      loadStarted = true;
      fetch(`${process.env.DATA_URL}index.json`).then((result) => {
        result.json().then((d) => {
          data = d;
        });
      });
    }
  }, []);

  return data || {};
};

export default useData;
