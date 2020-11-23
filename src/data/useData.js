import {useEffect} from 'react';
import {DATA_URL} from './constants';

let data = null;
let started = false;

const useData = () => {
  useEffect(() => {
    if (data === null && started === false) {
      started = true;
      fetch(`${DATA_URL}index.json`).then((result) => {
        result.json().then((d) => {
          data = d;
        });
      });
    }
  }, []);

  return data || {};
};

export default useData;
