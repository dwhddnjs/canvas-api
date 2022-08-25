import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

type stateTypes = {
  state: {
    photo: string;
  };
};

const Photo = () => {
  const { state } = useLocation() as stateTypes;

  return (
    <PhotoContainer>
      <PhotoImg>
        <img src={state.photo} alt="" width={890} height={800} />
      </PhotoImg>
    </PhotoContainer>
  );
};

export default Photo;

const PhotoContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: 50px;
`;

const PhotoImg = styled.div``;
