import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// const findAllBreeds = data => {
//   const breeds = Object.keys(data);
//   for (let i = 0; i < breeds.length; i++) {
//     if (breeds[i].length > 0) {
//       subbreeds.push(breeds[i]);
//     }
//   }
//   return [...breeds, ...subbreeds];
// };

export const fetchBreeds = createAsyncThunk('breeds/all', async () => {
  const response = await fetch('https://dog.ceo/api/breeds/list/all');
  const data = await response.json();
  // const subbreeds = findAllBreeds(data.message);
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
export const selectBreeds = state => state.breeds;

export default breedsSlice.reducer;
