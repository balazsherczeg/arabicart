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
  padding: 1.5rem 1.5rem 2rem;
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
          {data.map(({id, scale, width = 300}) => (
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

export default Main;
