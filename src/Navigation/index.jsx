import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';

import {DataContext} from '../context';
import Item from './Item';

const Wrapper = styled.div`
  display: flex;
  justify-items: flex-end;
`;

const Navigation = () => {
  const {categories} = useContext(DataContext);
  const {category} = useParams();

  return (
    <Wrapper>
      <Item to="/" active={category == null}>All</Item>

      {categories.map(
        ({slug, name}) => (
          <Item to={`/category/${slug}`} active={slug === category}>{name}</Item>
        ),
      )}
    </Wrapper>
  );
};

export default Navigation;
