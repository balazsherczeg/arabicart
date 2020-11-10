import React, {useEffect, useState, useCallback} from 'react';
import {string} from 'prop-types';
import styled from 'styled-components';

import Editable from './Editable';
import ColorInput from './ColorInput';
import ScaleInput from './ScaleInput';
import GuidesSwitch from './GuidesSwitch';
import Download from './Download';

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  padding: 3rem 0;
  box-sizing: border-box;
  background: #fff;
`;

const ButtonBar = styled.div`
  position: absolute;
  z-index: 1000;
  bottom: 0;
  display: flex;
  padding: .5rem;

  & > * {
    margin-right: .25rem;
    margin-left: .25rem;
  }
`;

// const Svg = styled.div`
//   height: 100%;
//   width: 100%;
// 
//   svg {
//     height: 100%;
//     width: 100%;
// 
//     .guides {
//       transition: .3s opacity;
//     }
//   }
// `;

const Editor = ({
  id,
  src,
}) => {
  const [showGuides, setShowGuides] = useState(false);
  const [scale, setScale] = useState(1);
  const [shapeGroups, setShapeGroups] = useState({});

  const [downloadable, setDownloadable] = useState(null);

  const init = useCallback(
    (initials) => {
      setShapeGroups(initials.shapeGroups);
      setDownloadable(initials.downloadable);
    },
    [],
  );

  const handleChange = (arg) => {
    setDownloadable(arg);
  };

  const toggleGuides = () => {
    setShowGuides(!showGuides);
  };

  const changeColor = (value, shapeGroupId) => {
    setShapeGroups({...shapeGroups, [shapeGroupId]: value});
  };

  const changeScale = (value) => {
    setScale(value);
  };

  return (
    <Wrapper>
      <Editable
        onInit={init}
        scale={scale}
        shapeGroups={shapeGroups}
        showGuides={showGuides}
        src={src}
        onChange={handleChange}
      />

      <ButtonBar>
        <GuidesSwitch onClick={toggleGuides} value={showGuides} />

        {Object.keys(shapeGroups).map((shapeGroupId) => (
          <ColorInput
            value={shapeGroups[shapeGroupId]}
            onChange={changeColor}
            key={`${shapeGroupId}`}
            shapeGroupId={shapeGroupId}
          />
        ))}

        <ScaleInput value={scale} onChange={changeScale} />
        {downloadable && (
          <Download
            downloadable={downloadable}
            id={id}
          />
        )}
      </ButtonBar>
    </Wrapper>
  );
};

Editor.propTypes = {
  id: string.isRequired,
  src: string.isRequired,
};

export default Editor;
