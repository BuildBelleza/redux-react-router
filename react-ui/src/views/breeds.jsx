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

  const handleSelectedBreeds = () => {
      console.log(selectedBreeds)
  };
  
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
        <div className="breeds-subheader">
          <h1>Breeds</h1>
          {selectedBreeds.length > 0 && (<button onClick={ handleSelectedBreeds }>Add selection to favorites?</button>)}
        </div>
        
        <br></br>
        <ul className="breeds">{breeds}</ul>
        
      </>
    )
  };

  export default Breeds;
