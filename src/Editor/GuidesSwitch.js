import React from 'react';
import {bool, func} from 'prop-types';

const GuidesSwitch = ({
  onClick,
  value,
}) => (
  <button onClick={onClick} type="button">
    {value ? 'Hide guides' : 'Show Guides'}
  </button>
);

GuidesSwitch.propTypes = {
  onClick: func.isRequired,
  value: bool.isRequired,
};

export default GuidesSwitch;
