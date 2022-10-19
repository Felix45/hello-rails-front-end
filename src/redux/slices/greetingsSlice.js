import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'http://localhost:3000/api/v1/greetings';
const http = axios.create({ baseURL: BASE_URL });

const initialState = {
  isLoading: false,
  isFaild: false,
  greetings: [],
};

export const fetchGreetingsThunk = createAsyncThunk(
  'greetings/fetchGreetings',
  async () => {
    const { data } = await http.get();
    return data.greeting;
  },
);

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  extraReducers: {
    [fetchGreetingsThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.greetings = action.payload;
    },
    [fetchGreetingsThunk.pending]: (state) => { state.isLoading = true; },
    [fetchGreetingsThunk.rejected]: (state) => { state.isFaild = true; },
  },
});

export default greetingsSlice.reducer;
