import React from 'react';
import {bool, func, string} from 'prop-types';

import Button from './Button';

const GuidesSwitch = ({
  className,
  onClick,
  value,
}) => (
  <Button
    className={className}
    onClick={onClick}
    width="11em"
    primary={false}
  >
    {value ? 'Hide guides' : 'Show Guides'}
  </Button>
);

GuidesSwitch.propTypes = {
  className: string.isRequired,
  onClick: func.isRequired,
  value: bool.isRequired,
};

export default GuidesSwitch;
