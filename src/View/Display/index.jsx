import React, {useContext} from 'react';
import {string} from 'prop-types';
import styled from 'styled-components';

import Editable from './Editable';
import Static from './Static';
import ControlContext from '../ControlContext';
import usePattern from '../../data/usePattern';
import SlideIn from '../../components/SlideIn';

const Wrapper = styled.div`
  height: 100%;
  position: relative;
`;

const EditableWrapper = styled.div`
  height: 100vh;
  width: 100%;
  padding-top: 48px;
`;

const Display = ({
  id,
}) => {
  const {
    onChange,
    scale,
    showGuides,
    editable,
  } = useContext(ControlContext);

  const src = usePattern(id);

  if (src) {
    return (
      <Wrapper className="Display">
        <Static
          scale={scale}
          showGuides={showGuides}
          src={src}
        />

        <SlideIn
          on={editable}
          from="bottom"
          scrim={false}
          portal={false}
        >
          <EditableWrapper className="EditableWrapper">
            <Editable
              onChange={onChange}
              showGuides={showGuides}
              src={src}
            />
          </EditableWrapper>
        </SlideIn>
      </Wrapper>
    );
  }

  return null;
};

Display.propTypes = {
  id: string.isRequired,
};

export default Display;
