import React from 'react';
import {bool, node, func} from 'prop-types';
import styled from 'styled-components';
import {CSSTransition} from 'react-transition-group';

const Modal = styled.div`
  background-color: white;
  bottom: 0;
  height: 100vh;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100vw;
  transition: .3s;
  transform: translate3d(0, 100vh, 0);

  &.VMG__Modal--enter {
    opacity: 0;
    transform: translate3d(0, 100vh, 0);
  }
  &.VMG__Modal--enter-done {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  &.VMG__Modal--exit {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  &.VMG__Modal--exit-done {
    opacity: 0;
    transform: translate3d(0, 100vh, 0);
  }
`;

const Layout = ({
  children,
  modal,
  onUnmountModal,
  showModal,
}) => (
  <>
    {children}

    <CSSTransition
      in={showModal}
      timeout={0}
      classNames="VMG__Modal-"
      onExited={onUnmountModal}
    >
      <Modal
        className="VMG__Modal"
      >
        {modal}
      </Modal>
    </CSSTransition>
  </>
);

Layout.propTypes = {
  children: node.isRequired,
  modal: node,
  onUnmountModal: func.isRequired,
  showModal: bool.isRequired,
};

Layout.defaultProps = {
  modal: null,
};

export default Layout;
