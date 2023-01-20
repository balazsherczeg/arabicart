import React from 'react';
import styled from 'styled-components';

const $ShopLink = styled.a`
  background: var(--shopColor);
  border-radius: 24px;
  border: 2px solid var(--shopColor);
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: var(--sansBold);
  font-size: 12px;
  height: 22px;
  letter-spacing: .05em;
  line-height: 22px;
  padding: 0 12px;
  text-decoration: none;
  text-transform: uppercase;
`;


const ShopLink = () => (
  <$ShopLink
    href="https://www.redbubble.com/people/balazsherczeg/shop?collections=1884852"
    target="_blank"
  >
    Shop
  </$ShopLink>
);

export default ShopLink;