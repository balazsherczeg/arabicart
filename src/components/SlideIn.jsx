import React from 'react';
import {bool, func, oneOf, node, number} from 'prop-types';
import styled from 'styled-components';
import {CSSTransition} from 'react-transition-group';

import Portal from './Portal';
import Scrim from './Scrim';

const DURATION = 500;

const ModalTransition = styled.div`
  background: #fff;
  bottom: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 2;

  ${({from, width}) => {
    switch (from) {
      case 'bottom': {
        return `
          width: 100vw;
          &.modal-transition-enter {
            transform: translateY(100%);
          }
          &.modal-transition-enter-active {
            transform: translateY(0);
            transition: transform ${DURATION}ms;
          }
          &.modal-transition-exit {
            transform: translateY(0);
          }
          &.modal-transition-exit-active {
            transform: translateY(100%);
            transition: transform ${DURATION}ms;
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
            transition: transform ${DURATION}ms;
            transform: translateX(0);
          }
          &.modal-transition-exit {
            transform: translateX(0);
          }
          &.modal-transition-exit-active {
            transition: transform ${DURATION}ms;
            transform: translateX(100%);
          }
        `;
      }
    }
  }}
`;

const ScrimTransition = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;

  &.scrim-transition-enter {
    opacity: 0;
  }
  &.scrim-transition-enter-active {
    transition: opacity ${DURATION}ms;
    opacity: 1;
  }
  &.scrim-transition-exit {
    opacity: 1;
  }
  &.scrim-transition-exit-active {
    transition: opacity ${DURATION}ms;
    opacity: 0;
  }
`;

const SlideIn = ({
  children,
  from,
  on,
  onClose,
  transparentScrim,
  width,
}) => {
  const cssTransitionProps = {
    in: on,
    unmountOnExit: true,
    timeout: DURATION,
  };

  return (
    <>

      <CSSTransition
        {...cssTransitionProps}
        classNames="scrim-transition"
      >
        <Portal>
          <ScrimTransition>
            <Scrim
              onClick={onClose}
              background={transparentScrim ? 'transparent' : '#0003'}
            />
          </ScrimTransition>
        </Portal>
      </CSSTransition>

      <CSSTransition
        {...cssTransitionProps}
        classNames="modal-transition"
      >
        <Portal>
          <ModalTransition
            from={from}
            width={width}
          >
            {children}
          </ModalTransition>
        </Portal>
      </CSSTransition>
    </>
  );
};

SlideIn.propTypes = {
  children: node.isRequired,
  from: oneOf(['right', 'bottom']),
  on: bool.isRequired,
  onClose: func.isRequired,
  transparentScrim: bool,
  width: number,
};

SlideIn.defaultProps = {
  from: 'right',
  transparentScrim: false,
  width: 300,
};

export default SlideIn;
