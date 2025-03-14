// peopleSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { fetchMen } from "./peopleAction";

const initialState = {
  data: {}, // Ensure it's an array
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
        state.error = null; // Reset any previous error when fetching starts
      })
      .addCase(fetchMen.fulfilled, (state, action) => {
        console.log("Redux Fetched Data:", action.payload); // ✅ Debug Redux state
        state.status = "SUCCESS";
        state.data = action.payload; // Ensure this structure matches API response
      })
      .addCase(fetchMen.rejected, (state, action) => {
        state.status = "ERROR";
        state.error = action.error.message || "Something went wrong"; // Better error handling
      });
  },
});

export default peopleSlice.reducer;
