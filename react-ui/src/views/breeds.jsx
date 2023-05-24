import React from 'react';
import { useSelector } from 'react-redux';
import { selectBreeds } from '../features/breedsSlice';

const Breeds = () => {
  const data = useSelector(selectBreeds); // data is our local state memory
  const breeds = data && data.map(breed => {
    return <li onClick>{breed}</li>; 
  });

  return (
    <>
    <h1>Breeds</h1>;
    <ul>{breeds}</ul>;
</>
      )
};

export default Breeds;
