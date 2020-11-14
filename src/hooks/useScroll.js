import {useState, useEffect} from 'react';

// https://gist.github.com/joshuacerbito/ea318a6a7ca4336e9fadb9ae5bbb87f4

const useScroll = () => {
  const [scroll, setScroll] = useState({
    x: document.body.getBoundingClientRect().left,
    y: document.body.getBoundingClientRect().top,
    direction: '',
  });

  const listener = () => {
    setScroll((prev) => ({
      x: document.body.getBoundingClientRect().left,
      y: -document.body.getBoundingClientRect().top,
      direction: prev.y > -document.body.getBoundingClientRect().top ? 'up' : 'down',
    }));
  };

  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => window.removeEventListener('scroll', listener);
  }, []);

  return scroll;
};

export default useScroll;
