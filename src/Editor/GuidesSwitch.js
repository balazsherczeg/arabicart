import React from 'react';
import {bool, func} from 'prop-types';

import Button from './Button';

const GuidesSwitch = ({
  onClick,
  value,
}) => (
  <Button
    onClick={onClick}
    width="11em"
    primary={false}
  >
    {value ? 'Hide guides' : 'Show Guides'}
  </Button>
);

GuidesSwitch.propTypes = {
  onClick: func.isRequired,
  value: bool.isRequired,
};

export default GuidesSwitch;
