import React from 'react';
import {bool, number, string} from 'prop-types';
import styled from 'styled-components';
import UpdateWithoutBlink from './UpdateWithoutBlink';

import Manipulatable from '../Manipulatable';
import useBackgroundWidth from '../useBackgroundWidth';

const Wrapper = styled.div`
  position: relative;
  height: 100%;
`;

const SvgContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Display = ({
  zoom,
  showGuides,
  src,
}) => {
  let renderableSrc = src;
  const {width, scale} = useBackgroundWidth(src, zoom, 240);

  if (showGuides) {
    const manipulatable = Manipulatable(src);
    manipulatable.showGuides();
    manipulatable.setGuideWidth(1 / scale);
    renderableSrc = manipulatable.getSrc();
    manipulatable.cleanUp();
  }

  return (
    <Wrapper>
      <UpdateWithoutBlink>
        <SvgContainer
          style={{
            backgroundImage: `url('data:image/svg+xml;utf8,${encodeURIComponent(renderableSrc)}')`,
            backgroundSize: `${width}px`,
          }}
        />
      </UpdateWithoutBlink>
    </Wrapper>
  );
};

Display.propTypes = {
  zoom: number.isRequired,
  showGuides: bool,
  src: string.isRequired,
};

Display.defaultProps = {
  showGuides: false,
};

export default Display;
