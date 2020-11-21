import React from 'react';
import styled from 'styled-components';
import useCategory from '../data/useCategory';

const Wrapper = styled.div`
  stroke: none;
  fill: var(--categoryColor-${({category}) => (category)});
  transition: color .5s;
`;

const Logo = () => {
  const category = useCategory() || 'all';

  return (
    <Wrapper category={category}>
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 500 500">
        <path d="M426.8 73.2L301.8 125 250 0 198.2 125 73.2 73.2 125 198.2 0 250 125 301.8 73.2 426.8 198.2 375 250 500 301.8 375 426.8 426.8 375 301.8 500 250 375 198.2z" />
      </svg>
    </Wrapper>
  );
};

export default Logo;
