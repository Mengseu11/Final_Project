import { createSlice } from "@reduxjs/toolkit";
import { getProfile, login } from "./authAction";

const initialState = {
  isAuthenticated: false,
  accessToken: null,
  profile: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logOut : (state) =>{
      state.isAuthenticated = false,
      state.accessToken = null,
      state.profile = {}
    }
  },
  extraReducers(builder) {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true
        state.accessToken = action.payload.access_token
        console.log('status', state.isAuthenticated)
        console.log('access token',state.accessToken)
      })
      .addCase(login.pending, (state, action) => {
        state.isAuthenticated = false
      })
      .addCase(login.rejected, (state, action) => {
        state.isAuthenticated = false
      })
      .addCase(getProfile.pending, (state, action) => {
        
    })
    .addCase(getProfile.fulfilled, (state, action) => {
        state.profile = action.payload
        state.isAuthenticated = true
    })
    .addCase(getProfile.rejected, (state, action) => {
        state.profile = {}
    })
  },
});
export const {logOut} = authSlice.actions
export default authSlice.reducer
