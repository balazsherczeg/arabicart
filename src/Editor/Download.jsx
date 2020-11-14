/* eslint-disable jsx-a11y/control-has-associated-label, jsx-a11y/anchor-has-content */
import React, {useRef} from 'react';
import {string} from 'prop-types';

import Button from './Button';

const Download = ({
  className,
  downloadable,
  id,
}) => {
  const linkRef = useRef(null);

  const handleClick = () => {
    linkRef.current.click();
  };

  return (
    <div className={className}>
      <Button onClick={handleClick}>Download</Button>
      <a
        href={`data:image/svg+xml;utf8,${encodeURIComponent(downloadable)}`}
        download={`${id}.svg`}
        ref={linkRef}
      />
    </div>
  );
};

Download.propTypes = {
  className: string.isRequired,
  downloadable: string.isRequired,
  id: string.isRequired,
};

export default Download;
