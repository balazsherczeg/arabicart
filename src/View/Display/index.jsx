import React, {useContext} from 'react';
import {func, string} from 'prop-types';
import styled from 'styled-components';

import Editable from './Editable';
import Static from './Static';
import ControlContext from '../ControlContext';
import usePattern from '../../data/usePattern';

const Wrapper = styled.div`
  height: calc(100% - 2 * var(--rowHeight));
  position: relative;
`;

const EditableWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
`;

const Display = ({
  id,
  onEditable,
}) => {
  const {
    editable,
    onChange,
    showGuides,
    zoom,
  } = useContext(ControlContext);

  onEditable(!editable);

  const src = usePattern(id);

  const props = {
    id,
    showGuides,
    src,
    zoom,
  };

  if (src) {
    return (
      <Wrapper className="Display">
        <Static {...props} />

        <EditableWrapper className="EditableWrapper">
          <Editable
            onChange={onChange}
            editable={editable}
            {...props}
          />
        </EditableWrapper>
      </Wrapper>
    );
  }

  return null;
};

Display.propTypes = {
  id: string.isRequired,
  onEditable: func.isRequired,
};

export default Display;
