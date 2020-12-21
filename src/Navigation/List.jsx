import React from 'react';
import styled from 'styled-components';

import ShopLink from '../ShopLink';
import useCategory from '../data/useCategory';
import useCategories from '../data/useCategories';
import Item from './Item';
import IconDefs from '../assets/categoryIcons.inline.svg';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 300px;
  right: 0;
  background: #fff;
`;

const IconDefsContainer = styled.div`
  display: none;
`;

const Spacer = styled.div`
  line-height: 3rem;
  height: 3rem;
  padding: 0 1rem 0 3rem;
`;

const List = () => {
  const categories = useCategories();
  const category = useCategory();

  return (
    <Wrapper>
      <IconDefsContainer>
        <IconDefs />
      </IconDefsContainer>

      <Item to="/" active={category == null}>All</Item>

      {categories.map(
        ({slug, name}) => (
          <Item
            key={slug}
            to={`/category/${slug}`}
            active={slug === category}
            slug={slug}
          >
            {name}
          </Item>
        ),
      )}

      <Spacer>
        <ShopLink />
      </Spacer>
    </Wrapper>
  );
};

export default List;
