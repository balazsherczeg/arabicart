import React from 'react';
import {node} from 'prop-types';
import styled from 'styled-components';

const DURATION = 500;

const Modal = styled.div`
  bottom: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 2;

  ${({
    from,
    width,
    height,
    duration = DURATION,
  }) => {
    switch (from) {
      case 'bottom': {
        return `
          right: auto;
          height: ${height ? `${height}px` : '100vh'};
          left: auto;
          top: auto;
          width: 100vw;

          &.modal-transition-enter {
            transform: translateY(100%);
          }
          &.modal-transition-enter-active {
            transform: translateY(0);
            transition: transform ${duration}ms;
          }
          &.modal-transition-exit {
            transform: translateY(0);
          }
          &.modal-transition-exit-active {
            transform: translateY(100%);
            transition: transform ${duration}ms;
          }
        `;
      }
      case 'right':
      default: {
        return `
          width: ${width}px;
          &.modal-transition-enter {
            transform: translateX(100%);
          }
          &.modal-transition-enter-active {
            transition: transform ${duration}ms;
            transform: translateX(0);
          }
          &.modal-transition-exit {
            transform: translateX(0);
          }
          &.modal-transition-exit-active {
            transition: transform ${duration}ms;
            transform: translateX(100%);
          }
        `;
      }
    }
  }}
`;

const SlideInModal = ({
  children,
  ...restProps
}) => (
  <Modal className="SlideInModal" {...restProps}>{children}</Modal>
);

SlideInModal.propTypes = {
  children: node.isRequired,
};

export default SlideInModal;
