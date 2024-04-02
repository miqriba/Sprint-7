import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchShips = createAsyncThunk("fetchShips", async () => {
  const data = await fetch("https://swapi.dev/api/starships/");
  return data.json();
});

const shipsSlice = createSlice({
  name: "ships",
  initialState: {
    isLoading: false,
    data: null,
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchShips.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchShips.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchShips.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export default shipsSlice.reducer;
