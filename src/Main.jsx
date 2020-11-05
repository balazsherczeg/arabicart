import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import Editor from './Editor';
import Thumbnail from './Thumbnail';

const Thumbnails = styled.div`
  background-color: #eee;
  display: flex;
  flex-wrap: wrap;
  padding: 0 1rem 2rem;
  justify-content: space-between;
  position: relative;
`;

const Main = () => {
  const [data, setData] = useState([]);
  const [editable, setEditable] = useState('1a');

  useEffect(() => {
    const fetchData = async () => {
      fetch('/data/index.json', {
        mode: 'no-cors',
      }).then((result) => {
        result.json().then(({patterns}) => {
          setData(patterns);
        });
      });
    };
    fetchData();
  }, []);

  return (
    <div>
      {editable && <Editor id={editable} />}
      <Thumbnails>
        {data.map(({id}) => (
          <Thumbnail
            key={id}
            id={id}
            onClick={() => setEditable(id)}
          />
        ))}
      </Thumbnails>
    </div>
  );
};

export default Main;
