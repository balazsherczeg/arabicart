import React, {useContext} from 'react';
import {func} from 'prop-types';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';

import {DataContext} from '../context';
import Item from './Item';
import Portal from '../Portal';
import Scrim from '../Scrim';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 200px;
  right: 0;
  background: #fff;
  z-index: 100;
`;
const IconDefs = styled.div`
  display: none;
`;

const List = ({
  onClose,
}) => {
  const {categories} = useContext(DataContext);
  const {category} = useParams();

  return (
    <Portal>
      <Scrim
        onClick={onClose}
        background="#0003"
      />
      <Wrapper>
        <IconDefs>
          <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500">
            <symbol id="all"><circle cx="250" cy="250" r="230" /></symbol>
            <symbol id="hexagonals"><path d="M449.2 365L250 480 50.8 365 50.8 135 250 20 449.2 135z" /></symbol>
            <symbol id="octagonals"><path d="M412.6 412.6L250 480 87.4 412.6 20 250 87.4 87.4 250 20 412.6 87.4 480 250z" /></symbol>
          </svg>
        </IconDefs>

        <Item to="/" active={category == null} slug="all">All</Item>

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
      </Wrapper>
    </Portal>
  );
};

List.propTypes = {
  onClose: func.isRequired,
};


export default List;
