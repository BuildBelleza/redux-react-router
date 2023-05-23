// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { useSelector } from 'react-redux';

const Breeds = () => {
  // eslint-disable-next-line no-unused-vars, no-undef
  const data = useSelector(selectBreeds);

  const breeds = data && data.map(breed => {
   // eslint-disable-next-line no-unused-vars
    return <li>{breed}</li>; 
  });

  return (
    <>
    <h1>Breeds</h1>
    <ul>{breeds}</ul>
</>
      )
};

export default Breeds;
