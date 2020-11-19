import React from 'react';
import {func, number, string} from 'prop-types';
import styled from 'styled-components';
import {ChromePicker} from 'react-color';

import Portal from '../../Portal';
import Scrim from '../../Scrim';

const Modal = styled.div`
  position: absolute;
  bottom: 88px;
  z-index: 101;
`;

const ColorPicker = ({
  color,
  onChange,
  onClose,
  left,
}) => (
  <Portal>
    <Scrim
      onClick={onClose}
    />
    <Modal
      style={{left: left - 225}}
    >
      <ChromePicker
        color={color}
        disableAlpha
        onChangeComplete={onChange}
      />
    </Modal>
  </Portal>
);

ColorPicker.propTypes = {
  color: string.isRequired,
  onClose: func.isRequired,
  onChange: func.isRequired,
  left: number.isRequired,
};

export default ColorPicker;
