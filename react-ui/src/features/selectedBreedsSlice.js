import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'; 


export const selectedBreedsSlice = createSlice({
  name: 'selectedBreeds',
  initialState: [],
  reducers: {
    addSelectBreedsToStore(state, action) {
      return action.payload;
    }
  }
});

// allows us to read from this slice of state - very important to understand that
export const selectSelectedBreeds = state => state.selectedBreeds;

export default selectedBreedsSlice.reducer;

export const { addSelectedBreedsToStore } = selectedBreedsSlice.actions;