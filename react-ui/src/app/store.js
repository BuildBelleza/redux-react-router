import { configureStore } from '@reduxjs/toolkit';
import breedsReducer from '../features/breedsSlice';
// import subbreedsReducer from '../features/subbreedsSlice';
// import selectedBreedReducer from '../features/selectedBreedSlice';

export default configureStore({
  reducer: {
    breeds: breedsReducer,
    // breedsWithSubbreeds: subbreedsReducer,
    // selectedBreed: selectedBreedReducer
  }
});
