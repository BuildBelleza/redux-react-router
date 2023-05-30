import React from 'react';
import { useSelector } from 'react-redux';
import { selectSelectedBreeds } from '../features/breedsSlice';

const Favorites = () => {
  const data = useSelector( selectSelectedBreeds );
  
  const breeds = data && data.map(breed => {
    return (
      <li
        className={selectedBreeds.indexOf(breed) > 1 ? 'active' : ''} // if breed is in selectedBreeds, then add active class
        data-breed={breed}
        key={breed}
        onClick={handleClick}
      >
        {breed}
      </li>
    );
  })
  return (
    <h1>Favorites</h1>
  )
};

export default Favorites
