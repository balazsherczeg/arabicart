import React from 'react';
import {func, shape, string} from 'prop-types';
import styled from 'styled-components';
import {useInView} from 'react-intersection-observer';

import Image from './Image';

const $Frame = styled.article`
  --aspectRatio: calc(1 / 1.62);

  background-color: #475387;
  box-sizing: border-box;
  display: block;
  padding-bottom: calc(100% * var(--aspectRatio));
  position: relative;
`;

const $Caption = styled.div`
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
  item,
  item: {id},
  onClick,
}) => {
  const {ref, inView} = useInView({
    triggerOnce: true,
  });

  return (
    <$Frame
      ref={ref}
      role="button"
      onClick={onClick}
      title={id}
    >
      {inView && (
        <Image
          item={item}
        />
      )}
      <$Caption>{id}</$Caption>
    </$Frame>
  );
};

Thumbnail.propTypes = {
  item: shape({
    id: string.isRequired,
  }).isRequired,
  onClick: func.isRequired,
};

export default Thumbnail;
