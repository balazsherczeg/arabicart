import React from 'react';
import {bool, number, string} from 'prop-types';
import styled from 'styled-components';
import UpdateWithoutBlink from './UpdateWithoutBlink';

import useBackgroundWidth from '../useBackgroundWidth';
import {svgToDom} from '../utils';

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
  let s = src;
  const {width, scale} = useBackgroundWidth(src, zoom, 240);

  if (showGuides) {
    const svg = svgToDom(src);
    svg.showGuides(showGuides);
    svg.setGuideWidth(1 / scale);
    s = svg.getInner();
    svg.cleanUp();
  }

  return (
    <Wrapper>
      <UpdateWithoutBlink>
        <SvgContainer
          style={{
            backgroundImage: `url('data:image/svg+xml;utf8,${encodeURIComponent(s)}')`,
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
