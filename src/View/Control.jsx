import React, {useState, useEffect, useContext} from 'react';
import {shape, node, string} from 'prop-types';
import styled from 'styled-components';

import {DataContext} from '../context';
import Customizer from './Customizer';
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
`;

const RightBottom = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px;
`;

const ControlRow = styled.div`
  bottom: var(--rowHeight);
  position: absolute;
  right: 0;
  width: 100%;
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
`;

const LeftBottom = styled.div`
  position: absolute;
  left: 12px;
  bottom: 12px;
`;

const Control = ({
  item: {
    id,
  },
  children,
}) => {
  const [scale, setScale] = useState(1);
  const [states, setStates] = useState({});
  const [downloadable, setDownloadable] = useState(null);

  // State manipulating functions

  const updateState = (nextState, _id) => {
    const itemId = _id || id;
    setStates({
      ...states,
      [itemId]: {
        ...states[itemId],
        ...nextState,
      },
    });
  };

  const getState = (property) => {
    return states[id] && states[id][property];
  };

  const toggleState = (property) => {
    updateState({[property]: !getState(property)});
  };

  // Init

  const init = (initials) => {
    updateState({shapeGroups: initials.shapeGroups});
  };

  useEffect(() => {
    if (!states[id]) {
      updateState({
        editable: false,
        showGuides: false,
        shapeGroups: {},
        strokeColor: '#fff',
        strokeScale: 1,
        downloadable: null,
      });
    }

    const itemId = id;

    return () => {
      updateState({editable: false}, itemId);
    };
  }, [id]); // eslint-disable-line

  // Downloadable

  const {getSvg} = useContext(DataContext);
  const setOriginalDownloadable = () => {
    getSvg(id).then((src) => {
      setDownloadable(src);
    });
  };

  useEffect(() => {
    if (!getState('downloadable')) {
      setOriginalDownloadable();
    }
  }, [id]); // eslint-disable-line

  useEffect(() => {
    if (!getState('editable')) {
      setOriginalDownloadable();
    }
  }, [getState('editable')]); // eslint-disable-line

  const handleChange = (src) => {
    setDownloadable(src);
  };

  // Handlers

  const handleFillColorChange = (nextColor, shapeGroupId) => {
    updateState({
      shapeGroups: {
        ...getState('shapeGroups'),
        [shapeGroupId]: nextColor,
      },
    });
  };

  const handleGuideVisibilityChange = () => toggleState('showGuides');
  const handleEditabilityChange = () => toggleState('editable');
  const handleScaleChange = (nextScale) => setScale(nextScale);
  const handleStrokeColorChange = (strokeColor) => updateState({strokeColor});
  const handleStrokeWidthChange = (strokeScale) => updateState({strokeScale});

  return (
    <Wrapper>
      <ControlContext.Provider
        value={{
          onChange: handleChange,
          onInit: init,
          scale,
          states,
        }}
      >
        {children}
      </ControlContext.Provider>

      {getState('editable') && getState('shapeGroups') && (
        <ControlRow>
          <Customizer
            onFillChange={handleFillColorChange}
            onStrokeColorChange={handleStrokeColorChange}
            onStrokeWidthChange={handleStrokeWidthChange}
            shapeGroups={getState('shapeGroups')}
            strokeColor={getState('strokeColor')}
            strokeScale={getState('strokeScale')}
          />
        </ControlRow>
      )}

      <RightTop>
        <Download
          downloadable={downloadable}
          id={id}
        />
      </RightTop>

      <CenterBottom>
        <Scale
          value={scale}
          onChange={handleScaleChange}
          minValue={0.1}
        />
      </CenterBottom>

      <LeftBottom>
        <Guides
          onClick={handleGuideVisibilityChange}
          value={getState('showGuides')}
        />
      </LeftBottom>

      <RightBottom>
        <Customize
          onClick={handleEditabilityChange}
          value={getState('editable')}
        />
      </RightBottom>
    </Wrapper>
  );
};

Control.propTypes = {
  item: shape({
    id: string.isRequired,
  }).isRequired,
  children: node.isRequired,
};

export default Control;
