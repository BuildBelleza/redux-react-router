import { configureStore } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import breedsReducer from '../features/breedsSlice';
// import subbreedsReducer from '../features/subbreedsSlice';
// import selectedBreedReducer from '../features/selectedBreedSlice';
import selectedBreedsReducer from '../features/selectedBreedsSlice';

export default configureStore({
  reducer: {
    breeds: breedsReducer,
    // breedsWithSubbreeds : subbreedsReducer,
    selectedBreeds: selectedBreedsReducer
  }
});
