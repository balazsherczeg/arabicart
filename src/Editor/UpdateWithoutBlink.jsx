import React, {useState, useEffect} from 'react';
import {node} from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  position: relative;

  & > * {
    position: absolute;
  }
`;

const Transition = ({
  children,
  children: {props},
}) => {
  const [prevProps, setPrevProps] = useState(props);

  useEffect(() => {
    setTimeout(() => setPrevProps(props), 50);
  }, [props]);

  return (
    <Wrapper>
      {React.cloneElement(children, {...props})}
      {React.cloneElement(children, {...prevProps})}
    </Wrapper>
  );
};

Transition.propTypes = {
  children: node.isRequired,
};

export default Transition;
