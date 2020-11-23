import {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

const Portal = ({children, zIndex = 100, position = 'absolute'}) => {
  const [container] = useState(document.createElement('div'));
  container.style.position = position;
  container.style.zIndex = zIndex;

  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []); // eslint-disable-line

  return ReactDOM.createPortal(
    children,
    container,
  );
};

export default Portal;
