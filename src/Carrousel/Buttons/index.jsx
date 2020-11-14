import React from 'react';
import {bool, func} from 'prop-types';
import styled from 'styled-components';

import PrevButton from './PrevButton';
import NextButton from './NextButton';
import CloseButton from './CloseButton';

const CloseButtonPositioned = styled(CloseButton)`
  top: 0px;
  left: 0px;
`;

const PrevButtonPositioned = styled(PrevButton)`
  left: .5rem;
  top: 50vh;
  margin-top: -24px;
`;

const NextButtonPositioned = styled(NextButton)`
  right: .5rem;
  top: 50vh;
  margin-top: -24px;
`;

const Buttons = ({
  onPrev,
  onNext,
  onClose,
  showPrev,
  showNext,
}) => (
  <>
    <CloseButtonPositioned onClick={onClose} />
    {showPrev && <PrevButtonPositioned onClick={onPrev} />}
    {showNext && <NextButtonPositioned onClick={onNext} />}
  </>
);

Buttons.propTypes = {
  onPrev: func.isRequired,
  onNext: func.isRequired,
  onClose: func.isRequired,
  showPrev: bool.isRequired,
  showNext: bool.isRequired,
};

export default Buttons;
