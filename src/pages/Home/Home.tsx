import React, { FC, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import dotenv from 'dotenv';

const Home = () => {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://picsum.photos/v2/list').then((res) => res.json()),
  );

  if (isLoading) return <span>loading</span>;

  if (error) return null;

  return (
    <HomeContainer>
      <ListContainer>
        {data?.map((photo: any) => (
          <Link to={`/photo/${photo.id}`} state={{ photo: photo.download_url }}>
            <ImgTitleWrapper key={photo.id}>
              <img src={photo.download_url} alt="" width={200} height={200} />
              <span>{photo.author}</span>
            </ImgTitleWrapper>
          </Link>
        ))}
      </ListContainer>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 50px;
  height: 100vh;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 890px;

  height: 800px;
  overflow-x: scroll;
  flex-wrap: wrap;
`;

const ImgTitleWrapper = styled.div`
  border: 1px solid;
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: 10px;
`;
