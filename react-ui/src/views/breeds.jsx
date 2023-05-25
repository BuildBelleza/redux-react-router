import React from 'react';
import { useSelector } from 'react-redux';
import { selectBreeds } from '../features/breedsSlice';

const Breeds = () => {

  const data = useSelector(selectBreeds); // data is our local state memory

  const handleClick = e => {
    console.log(e.target.dataset.breed);
  }
  
  const breeds = data && data.map(breed => {
    return <li data-breed={breed}  onClick={handleClick}>{breed}</li>; 
  })

  return (
    <>
      <h1>Breeds</h1>
      <br></br>
    <ul>{breeds}</ul>
</>
      )
};

export default Breeds;
