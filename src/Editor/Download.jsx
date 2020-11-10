import React from 'react';
import {string} from 'prop-types';

const Download = ({
  downloadable,
  id,
}) => (
  <a
    href={`data:image/svg+xml;utf8,${encodeURIComponent(downloadable)}`}
    download={`${id}.svg`}
  >
    Download
  </a>
);

Download.propTypes = {
  downloadable: string.isRequired,
  id: string.isRequired,
};

export default Download;
