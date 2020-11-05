import React, {useState, useEffect} from 'react';
import {func, string} from 'prop-types';
import styled from 'styled-components';
import {useInView} from 'react-intersection-observer';

const Entry = styled.article`
  --columnWidth: calc(100% / 3 - .5rem);
  --aspectRatio: calc(2 / 3);

  border: 1px #ddd solid;
  box-sizing: border-box;
  display: block;
  flex-basis: var(--columnWidth);
  margin-bottom: 1rem;
  padding-bottom: calc(var(--columnWidth) * var(--aspectRatio));
  position: relative;
  background-color: #475387;
`;

const Frame = styled.div`
  background-size: cover;
  border: .25rem #fff solid;
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
  onClick,
}) => {
  const [src, setSrc] = useState(null);
  const {ref, inView} = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && !src) {
      fetch(`/data/${id}.svg`).then(
        (result) => {
          result.text().then(
            (svg) => {
              setSrc(svg);
            },
          );
        },
      );
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
        }}
      />
      <Caption>{id}</Caption>
    </Entry>
  );
};

Thumbnail.propTypes = {
  id: string.isRequired,
  onClick: func.isRequired,
};

export default Thumbnail;
