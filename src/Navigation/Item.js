import React from 'react';
import {bool, string} from 'prop-types';
import {Link} from '@reach/router';
import styled from 'styled-components';
import useCategoryItemCount from '../data/useCategoryItemCount';

const Wrapper = styled.div`
  --color: var(--categoryColor-${({category}) => category});

  position: relative;
  transition: all .3s ease;
  transition-property: background-color, fill;

  a {
    display: block;
    fill: var(--color);
    line-height: 3rem;
    height: 3rem;
    padding: 0 1rem 0 3rem;
    text-decoration: none;
  }

  a:hover {
    background-color: #eee;
  }

  ${({empty}) => (empty && (`
    opacity: .3;

    a {
      pointer-events: none;
      cursor: default;
      fill: #aaa;
    }
  `))}
`;

const Inner = styled.span`
  color: #000;
  font-family: ${({active}) => (active ? 'var(--serifItalic)' : 'var(--serif)')};
  letter-spacing: 0.02em;
  opacity: .8;
  `;

const Svg = styled.svg`
  height: 1.5rem;
  left: 1rem;
  position: absolute;
  top: 0.75rem;
  width: 1.5rem;
`;

const Item = ({
  active,
  children,
  to,
  slug,
  href,
}) => {
  const itemCount = useCategoryItemCount(slug);

  return (
    <Wrapper
      active={active}
      category={slug}
      empty={itemCount === 0}
    >
      {href ? (
        <a href={href}>
          <Inner>
            {children}
          </Inner>
        </a>
      ) : (
        <Link to={to}>
          {itemCount > 1 && (
            <Svg
              viewBox="0 0 500 500"
            >
              <use
                xlinkHref={`#${slug}`}
              />
            </Svg>
          )}

          <Inner>
            {children}
          </Inner>
        </Link>
      )}
    </Wrapper>
  );
};

Item.propTypes = {
  active: bool.isRequired,
  children: string.isRequired,
  to: string.isRequired,
  slug: string,
  href: string,
};

Item.defaultProps = {
  slug: 'all',
  href: false,
};

export default Item;
