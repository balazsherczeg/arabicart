import React from 'react';
import {bool, number, string} from 'prop-types';
import styled from 'styled-components';
import UpdateWithoutBlink from './UpdateWithoutBlink';

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
  scale,
  showGuides,
  src,
  width,
}) => {
  let s = src;

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
            backgroundSize: `${scale * width}px`,
          }}
        />
      </UpdateWithoutBlink>
    </Wrapper>
  );
};

Display.propTypes = {
  scale: number.isRequired,
  showGuides: bool,
  src: string.isRequired,
  width: number.isRequired,
};

Display.defaultProps = {
  showGuides: false,
};

export default Display;
