import React from 'react';
import {bool, func} from 'prop-types';

import Button from './Button';

const Customize = ({
  onClick,
  value,
}) => (
  <Button
    primary={false}
    onClick={onClick}
  >
    {value ? 'Cancel' : 'Customize'}
  </Button>
);

Customize.propTypes = {
  onClick: func.isRequired,
  value: bool.isRequired,
};

export default Customize;
