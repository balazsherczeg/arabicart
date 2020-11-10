import React, {useContext, useState} from 'react';
import styled from 'styled-components';

import {DataContext} from './context';
import Layout from './Layout';
// import Editor from './Editor';
import Thumbnail from './Thumbnail';
import Carrousel from './Carrousel';

const Thumbnails = styled.div`
  background-color: #eee;
  display: flex;
  flex-wrap: wrap;
  padding: 0 1rem 2rem;
  justify-content: space-between;
  position: relative;
`;

const Main = () => {
  const [fullView, setFullView] = useState(null);
  const [showFullView, setShowFullView] = useState(false);
  const {data} = useContext(DataContext);

  const handleItemClick = (id) => {
    const index = data.findIndex((item) => id === item.id);
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
        items={data}
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
          {data.map(({id, scale}) => (
            <Thumbnail
              key={id}
              id={id}
              scale={scale}
              onClick={() => handleItemClick(id)}
            />
          ))}
        </Thumbnails>
      </div>
    </Layout>
  );
};

export default Main;
