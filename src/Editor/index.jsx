import React, {useEffect, useState, useCallback} from 'react';
import {string} from 'prop-types';
import styled from 'styled-components';

import Editable from './Editable';
import FillInput from './FillInput';
import ScaleInput from './ScaleInput';
import GuidesSwitch from './GuidesSwitch';

const Wrapper = styled.div``;

const ButtonBar = styled.div`
  display: flex;
  padding: .5rem;

  & > * {
    margin-right: .25rem;
    margin-left: .25rem;
  }
`;

const Editor = ({
  id,
}) => {
  const [svg, setSvg] = useState(null);

  const [showGuides, setShowGuides] = useState(true);
  const [scale, setScale] = useState(1);
  const [shapeGroups, setShapeGroups] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch(`/data/${id}.svg`, {
        mode: 'no-cors',
      }).then((result) => {
        result.text().then((text) => {
          const div = document.createElement('div');
          div.innerHTML = text.trim();
          setSvg(div);
        });
      });
    };

    fetchData();

    setScale(1);
  }, [id]);

  const init = useCallback(
    (initials) => {
      setShapeGroups(initials.shapeGroups);
    },
    [id], // eslint-disable-line
  );

  const toggleGuides = () => {
    setShowGuides(!showGuides);
  };

  const changeColor = (value, shapeGroupId) => {
    setShapeGroups({...shapeGroups, [shapeGroupId]: value});
  };

  const changeScale = (value) => {
    setScale(value);
  };

  if (svg != null) {
    return (
      <Wrapper>
        <Editable
          onInit={init}
          scale={scale}
          shapeGroups={shapeGroups}
          showGuides={showGuides}
          svg={svg}
        />
        <ButtonBar>
          <GuidesSwitch onClick={toggleGuides} value={showGuides} />

          {Object.keys(shapeGroups).map((shapeGroupId) => (
            <FillInput
              value={shapeGroups[shapeGroupId]}
              onChange={changeColor}
              key={`${id}${shapeGroupId}`}
              shapeGroupId={shapeGroupId}
            />
          ))}

          <ScaleInput value={scale} onChange={changeScale} />
        </ButtonBar>
      </Wrapper>
    );
  }

  return null;
};

Editor.propTypes = {
  id: string.isRequired,
};

export default Editor;
