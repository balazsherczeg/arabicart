import React from 'react';
import styled from 'styled-components';

import ShopLink from '../ShopLink';
import useCategory from '../data/useCategory';
import useCategories from '../data/useCategories';
import Item from './Item';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 300px;
  right: 0;
  background: #fff;
`;

const IconDefs = styled.div`
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
      <IconDefs>
        <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500">
          <symbol id="all"><circle cx="250" cy="250" r="230" /></symbol>
          <symbol id="hexagonals"><path d="M449.2 365L250 480 50.8 365 50.8 135 250 20 449.2 135z" /></symbol>
          <symbol id="octagonals"><path d="M412.6 412.6L250 480 87.4 412.6 20 250 87.4 87.4 250 20 412.6 87.4 480 250z" /></symbol>
          <symbol id="dodecagonals"><path d="M250 480L135 449.2 50.8 365 20 250 50.8 135 135 50.8 250 20 365 50.8 449.2 135 480 250 449.2 365 365 449.2z" /></symbol>
          <symbol id="octagons-squares"><path d="M192.499,192.496v-81.313v-0.002l-47.635-47.632L87.369,87.365l-23.821,57.501l47.636,47.633  L192.499,192.496z M168.678,250l-57.501-57.5l-67.363,0.002L20,249.997L43.816,307.5l67.364-0.003L168.678,250z M192.497,307.503  h-81.322l-47.63,47.636l23.818,57.495l57.501,23.818l47.633-47.633V307.503z M307.498,307.503v81.316l-57.501-57.498l-57.503,57.503  l0.003,67.361l57.5,23.814l57.501-23.814v-67.358l47.635,47.63l57.5-23.818l23.816-57.503l-47.627-47.627l-0.006-0.006H307.498z M480,250.002l-23.82-57.501h-67.355l47.631-47.635l-23.822-57.501l-57.5-23.815L307.5,111.183v81.319h81.318l-57.5,57.501  l57.504,57.506l67.363-0.006L480,250.002z M307.502,111.18L307.5,43.817l-57.503-23.818l-57.495,23.82l-0.003,67.363L250,168.684  L307.502,111.18z" /></symbol>
          <symbol id="stars-1"><path d="M134.999,219.186l66.393-17.79l17.788-66.396l48.605,48.606l66.395-17.79l30.809-115.001  l-84.186,84.185l-30.81-115.002l-30.817,115.002l-84.185-84.185l30.813,114.998l-114.99-30.813l84.185,84.188L19.987,250.004  l115.003,30.813l-84.185,84.181l115.002-30.809l17.797-66.397L134.999,219.186z M480,249.999l-115.004-30.813l84.186-84.182  l-115.002,30.81l-17.793,66.397l48.602,48.606l-66.383,17.789l-17.803,66.396l-48.593-48.605l-66.402,17.793l-30.809,114.997  l84.181-84.185L249.997,480l30.816-115l84.184,84.185l-30.807-114.993l114.984,30.814l-84.186-84.192L480,249.999z" /></symbol>
          <symbol id="stars-2"><path id="stars-3-4" d="M250.186,148.336l-79.315-40.414l13.925-87.923l-62.946,62.946L42.533,42.531l40.414,79.316  l-62.946,62.946l87.923-13.925l40.413,79.316l13.927-87.924L250.186,148.336z M148.337,250.184L107.923,329.5L20,315.575  l62.947,62.945l-40.415,79.316l79.317-40.413l62.945,62.945l-13.925-87.923l79.317-40.413l-87.924-13.927L148.337,250.184z M392.447,329.501l-40.412-79.317l-13.926,87.924l-87.923,13.925l79.316,40.414l-13.926,87.923l62.945-62.946l79.318,40.415  l-40.414-79.317l62.945-62.945L392.447,329.501z M352.035,250.184l40.412-79.315l87.924,13.925l-62.945-62.945l40.414-79.317  l-79.316,40.413L315.578,20l13.926,87.923l-79.318,40.414l87.923,13.926L352.035,250.184z" /></symbol>
          <symbol id="heptagonals"><path d="M145 480L14.1 315.8 60.8 111.1 250 20 439.2 111.1 485.9 315.8 355 480z" /></symbol>
          <symbol id="pentagonals"><path d="M100.5 480L8.2 195.7 250 20 491.8 195.7 399.5 480z" /></symbol>
        </svg>
      </IconDefs>

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
