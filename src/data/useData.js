import {useEffect} from 'react';

let data = null;
let started = false;

console.log(process.env.DATA_URL);

const useData = () => {
  useEffect(() => {
    if (data === null && started === false) {
      started = true;
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
