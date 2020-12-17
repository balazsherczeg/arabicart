import React, {useState} from 'react';
import styled from 'styled-components';
import usePatternsByCategory from './data/usePatternsByCategory';

import SlideIn from './components/SlideIn';
import Thumbnail from './View/Thumbnail';
import Carrousel from './components/Carrousel';
import Hero from './Hero';
import useCategory from './data/useCategory';

const Wrapper = styled.div`
  padding-top: 6rem;
`;

const Thumbnails = styled.div`
  background-color: #eee;
  display: grid;
  grid-gap: var(--gutter);
  grid-template-columns: repeat(auto-fill, var(--columnWidth));
  justify-content: space-between;
  padding: var(--padding) var(--padding) 2rem;
  position: relative;
`;

const List = () => {
  const [fullView, setFullView] = useState(null);
  const [showFullView, setShowFullView] = useState(false);
  const patterns = usePatternsByCategory();
  const category = useCategory();

  const handleItemClick = (id) => {
    const index = patterns.findIndex((item) => id === item.id);
    setFullView(index);
    setShowFullView(true);
  };

  const handleHideFullView = () => {
    setShowFullView(false);
  };

  return (
    <>
      <Wrapper>
        {!category && <Hero />}
        <Thumbnails>
          {patterns.map((item) => (
            <Thumbnail
              key={item.id}
              item={item}
              onClick={() => handleItemClick(item.id)}
            />
          ))}
        </Thumbnails>
      </Wrapper>

      <SlideIn
        from="bottom"
        on={showFullView}
      >
        <Carrousel
          items={patterns}
          index={fullView}
          onClose={handleHideFullView}
        />
      </SlideIn>
    </>
  );
};

export default List;
