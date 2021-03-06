import React, {useState} from 'react';
import {node, string} from 'prop-types';
import styled from 'styled-components';

import usePattern from '../data/usePattern';
import Scale from './Buttons/Scale';
import Guides from './Buttons/Guides';
import Customize from './Buttons/Customize';
import Download from './Buttons/Download';
import ControlContext from './ControlContext';

const Wrapper = styled.div`
  --rowHeight: 48px;

  height: 100%;
  position: relative;
  padding: var(--rowHeight) 0;
  box-sizing: border-box;
  background: #fff;
`;

const RightTop = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 10;
`;

const RightBottom = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px;
  z-index: 10;
`;

const CenterBottom = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  height: var(--rowHeight);
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  background: #fff;
  z-index: 10;
`;

const LeftBottom = styled.div`
  position: absolute;
  left: 12px;
  bottom: 12px;
  z-index: 10;
`;

const Control = ({
  id,
  children,
}) => {
  const src = usePattern(id);
  const [zoom, setZoom] = useState(1);
  const [editable, setEditable] = useState(false);
  const [showGuides, setShowGuides] = useState(false);

  // Handlers

  const handleGuideVisibilityChange = () => setShowGuides(!showGuides);
  const handleEditabilityChange = () => setEditable(!editable);
  const handleScaleChange = (nextScale) => setZoom(nextScale);

  return (
    <Wrapper>
      <ControlContext.Provider
        value={{
          zoom,
          showGuides,
          editable,
        }}
      >
        {children}
      </ControlContext.Provider>

      <RightTop>
        {!editable && (
          <Download
            src={src}
            id={id}
            zoom={zoom}
          />
        )}
      </RightTop>

      <CenterBottom>
        <Scale
          value={zoom}
          onChange={handleScaleChange}
        />
      </CenterBottom>

      <LeftBottom>
        <Guides
          onClick={handleGuideVisibilityChange}
          value={showGuides}
        />
      </LeftBottom>

      <RightBottom>
        <Customize
          onClick={handleEditabilityChange}
          value={editable}
        />
      </RightBottom>
    </Wrapper>
  );
};

Control.propTypes = {
  id: string.isRequired,
  children: node.isRequired,
};

export default Control;
