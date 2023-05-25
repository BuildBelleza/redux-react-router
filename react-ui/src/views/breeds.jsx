import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectBreeds } from '../features/breedsSlice';

const Breeds = () => {
  const [selectedBreeds, setSelectedBreeds] = useState([]);

  const data = useSelector(selectBreeds); // data is our local state memory

  const handleClick = e => {
    const value = e.target.dataset.breed;
    let _selectedBreeds = [];
    if (selectedBreeds.indexOf(value) > -1) {
      const _selectedBreeds = selectedBreeds.filter(breed => breed !== value);
    } else {
      _selectedBreeds = [...selectedBreeds, value];
      setSelectedBreeds(_selectedBreeds);
    }
    
    }

  const breeds = data && data.map(breed => {
    return (
      <li
        className={selectedBreeds.indexOf(breed) > -1 ? 'active' : ''} // if breed is in selectedBreeds, then add active class
        data-breed={breed}
        key={breed}
        onClick={handleClick}
      >
        {breed}
      </li>
    );
});

    return (
      <>
        
        <h1>Breeds</h1>
        <br></br>
        <ul className="breeds">{breeds}</ul>
        
      </>
    )
  };

  export default Breeds;
