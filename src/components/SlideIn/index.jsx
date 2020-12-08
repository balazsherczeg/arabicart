import React, {Fragment} from 'react';
import {bool, func, oneOf, node, number} from 'prop-types';
import styled from 'styled-components';
import {CSSTransition} from 'react-transition-group';

import Portal from '../Portal';
import Scrim from '../Scrim';
import SlideInInner from './SlideInModal';
import SlideInWrapper from './SlideInWrapper';

const DURATION = 500;

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
  height,
  portal,
  scrim,
}) => {
  const cssTransitionProps = {
    in: on,
    unmountOnExit: true,
    timeout: DURATION,
  };

  const PortalWrapper = portal ? Portal : Fragment;

  return (
    <>
      {scrim && (
        <CSSTransition
          {...cssTransitionProps}
          classNames="scrim-transition"
        >
          <PortalWrapper>
            <ScrimTransition>
              <Scrim
                onClick={onClose}
                background={transparentScrim ? 'transparent' : '#0003'}
              />
            </ScrimTransition>
          </PortalWrapper>
        </CSSTransition>
      )}

      <SlideInWrapper
        on={on}
      >
        <PortalWrapper>
          <SlideInInner
            from={from}
            width={width}
            height={height}
            duration={DURATION}
          >
            {children}
          </SlideInInner>
        </PortalWrapper>
      </SlideInWrapper>
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
  height: number,
  scrim: bool,
  portal: bool,
};

SlideIn.defaultProps = {
  from: 'right',
  transparentScrim: false,
  width: 300,
  height: null,
  scrim: true,
  portal: true,
};

export default SlideIn;
