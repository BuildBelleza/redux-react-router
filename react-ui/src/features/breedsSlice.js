import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const findAllBreeds = data => {
  const breeds = Object.keys(data);
  const subbreeds = [];
  let currentBreedNameIndex = '';
  for (let i = 0; i < breeds.length; i++) {
    if (data[breeds[i]].length > 0) {
      for (let j = 0; j < data[breeds[i]].length; j++) {
        subbreeds.push(`${breeds[i]}-${data[breeds[i]][j]}`)
      }
    }
  }
  return [...breeds, ...subbreeds];
};

export const fetchBreeds = createAsyncThunk('breeds/all', async () => {
  const response = await fetch('https://dog.ceo/api/breeds/list/all');
  const data = await response.json();
  const subbreeds = findAllBreeds(data.message);
  console.log(data.message);
  const breeds = Object.keys(data.message);
  return breeds;
});

export const breedsSlice = createSlice({
  name: 'breeds',
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBreeds.fulfilled, (state, action) => {
      return action.payload;
    });
  }
});

// allows us to read from this slice of state - very important to understand that
export const selectSelectedBreeds = state => state.selectedBreeds;

export const selectedBreeds = state => state.breeds;

//need to print list of breeds on the view state




export const selectBreeds = (state, breed) => {
  return state.breeds.find(b => b === breed);
};

export default breedsSlice.reducer;

