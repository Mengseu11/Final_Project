
import { createSlice } from "@reduxjs/toolkit";
import { fetchMen } from "./menAction";

const initialState = {
  data: {}, 
  status: "",
  error: null,
};

export const peopleSlice = createSlice({
  name: "men",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMen.pending, (state) => {
        state.status = "PENDING";
        state.error = null; 
      })
      .addCase(fetchMen.fulfilled, (state, action) => {
        console.log("Redux Fetched Data:", action.payload); 
        state.status = "SUCCESS";
        state.data = action.payload;
      })
      .addCase(fetchMen.rejected, (state, action) => {
        state.status = "ERROR";
        state.error = action.error.message || "Something went wrong"; 
      });
  },
});

export default peopleSlice.reducer;
