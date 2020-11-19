import React from 'react';
import {func} from 'prop-types';
import styled from 'styled-components';

import Portal from '../Portal';
import Scrim from '../Scrim';
import List from './List';

const ModalInner = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 300px;
  right: 0;
  background: #fff;
  z-index: 100;
`;

const Modal = ({
  onClose,
}) => (
  <Portal>
    <Scrim
      onClick={onClose}
      background="#0003"
    />
    <ModalInner>
      <List />
    </ModalInner>
  </Portal>
);

Modal.propTypes = {
  onClose: func.isRequired,
};

export default Modal;
