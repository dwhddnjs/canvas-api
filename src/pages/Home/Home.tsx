import React, { FC, useEffect, useState } from 'react';
import { useQuery } from 'react-query';

const Home: FC = () => {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://picsum.photos/v2/list').then((res) => res.json()),
  );

  return (
    <>
      {data?.map((photo: any) => (
        <div key={photo.id}>
          <img src={photo.download_url} alt="adsads" width={100} />
          <span>{photo.author}</span>
        </div>
      ))}
    </>
  );
};

export default Home;
