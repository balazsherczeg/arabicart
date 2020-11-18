import React, {useState, useEffect, useContext} from 'react';
import {func, number, string} from 'prop-types';
import styled from 'styled-components';
import {useInView} from 'react-intersection-observer';

import {DataContext} from './context';

const Entry = styled.article`
  --aspectRatio: calc(1 / 1.62);

  background-color: #475387;
  box-sizing: border-box;
  display: block;
  padding-bottom: calc(100% * var(--aspectRatio));
  position: relative;
`;

const Frame = styled.div`
  border: .5rem #fff solid;
  box-sizing: border-box;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  cursor: pointer;
`;

const Caption = styled.div`
  background: #fff;
  border-top-right-radius: .5em;
  bottom: 0;
  color: #333;
  display: block;
  font-family: var(--sans);
  font-size: .8rem;
  left: 0;
  line-height: 1em;
  padding: .25em .5em;
  position: absolute;
  text-transform: uppercase;
`;

const Thumbnail = ({
  id,
  scale,
  onClick,
  width,
}) => {
  const [src, setSrc] = useState(null);
  const {getSvg} = useContext(DataContext);
  const {ref, inView} = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && !src) {
      getSvg(id).then((svg) => {
        setSrc(svg);
      });
    }
  }, [inView]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Entry
      ref={ref}
      role="button"
      onClick={onClick}
      title={id}
    >
      <Frame
        style={{
          backgroundImage: `url('data:image/svg+xml;utf8,${encodeURIComponent(src)}')`,
          backgroundSize: `${scale * width}px`,
        }}
      />
      <Caption>{id}</Caption>
    </Entry>
  );
};

Thumbnail.propTypes = {
  id: string.isRequired,
  scale: number,
  onClick: func.isRequired,
  width: number.isRequired,
};

Thumbnail.defaultProps = {
  scale: 0.4,
};

export default Thumbnail;
