import {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

const Portal = ({children}) => {
  const [container] = useState(document.createElement('div'));

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
