import React, {useState, useCallback} from 'react';
import {number, shape, string} from 'prop-types';
import styled from 'styled-components';

import Editable from './Editable';
import ColorInput from './ColorInput';
import ScaleInput from './ScaleInput';
import GuidesSwitch from './GuidesSwitch';
import Download from './Download';
import Button from './Button';

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  padding: 3rem 0;
  box-sizing: border-box;
  background: #fff;
`;

const ButtonBar = styled.div`
  align-items: center;
  bottom: 0;
  /*display: flex;*/
  height: 3rem;
  padding: 0 12px;
  position: absolute;
  z-index: 99;
`;

const DownloadPositioned = styled(Download)`
  position: absolute;
  top: 12px;
  right: 12px;
`;

const Customize = styled(Button)`
  position: absolute;
  right: 12px;
  bottom: 12px;
`;

const Customizer = styled.div`
  display: flex;
  position: absolute;
  bottom: 12px;
  right: 100px;
  width: 100px;
`;

const Editor = ({
  item: {
    id,
    scale: initialScale,
  },
  src,
}) => {
  const [editable, setEditable] = useState(false);
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

  const toggleEditable = () => {
    setEditable(!editable);
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
        initialScale={initialScale}
      />

      <ButtonBar>
        <GuidesSwitch onClick={toggleGuides} value={showGuides} />


        <ScaleInput value={scale} onChange={changeScale} />

      </ButtonBar>

      {editable && Object.keys(shapeGroups).map((shapeGroupId) => (
        <Customizer>
          <ColorInput
            value={shapeGroups[shapeGroupId]}
            onChange={changeColor}
            key={shapeGroupId}
            shapeGroupId={shapeGroupId}
          />
        </Customizer>
      ))}

      {downloadable && (
        <DownloadPositioned
          downloadable={downloadable}
          id={id}
        />
      )}

      <Customize
        primary={false}
        onClick={toggleEditable}
      >
        Customize
      </Customize>
    </Wrapper>
  );
};

Editor.propTypes = {
  item: shape({
    id: string.isRequired,
    scale: number.isRequired,
  }).isRequired,
  src: string.isRequired,
};

export default Editor;
