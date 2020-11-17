import React, {useState} from 'react';
import styled from 'styled-components';
import usePatterns from './hooks/usePatterns';

import Layout from './Layout';
import Thumbnail from './Thumbnail';
import Carrousel from './Carrousel';

const Thumbnails = styled.div`
  background-color: #eee;
  display: flex;
  flex-wrap: wrap;
  padding: 1.5rem 1.5rem 2rem;
  justify-content: space-between;
  position: relative;
`;

const List = () => {
  const [fullView, setFullView] = useState(null);
  const [showFullView, setShowFullView] = useState(false);
  const patterns = usePatterns();

  const handleItemClick = (id) => {
    const index = patterns.findIndex((item) => id === item.id);
    setFullView(index);
    setShowFullView(true);
  };

  const handleHideFullView = () => {
    setShowFullView(false);
  };

  const handleUnmountFullView = () => {
    setTimeout(() => setFullView(null), 1000);
  };

  const modal = fullView != null
    ? (
      <Carrousel
        items={patterns}
        index={fullView}
        onClose={handleHideFullView}
      />
    )
    : null;

  return (
    <Layout
      modal={modal}
      onUnmountModal={handleUnmountFullView}
      showModal={showFullView}
    >
      <div>
        <Thumbnails>
          {patterns.map(({id, scale, width = 300}) => (
            <Thumbnail
              key={id}
              id={id}
              scale={scale}
              width={width}
              onClick={() => handleItemClick(id)}
            />
          ))}
        </Thumbnails>
      </div>
    </Layout>
  );
};

export default List;
