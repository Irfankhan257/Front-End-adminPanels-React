import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  error: null,
  role: null, // Add role to initial state
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signInSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
      state.role = action.payload.role; 
    },
    signOut: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
      state.role = null; 
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { signInSuccess, signOut, setError } = authSlice.actions;
export const selectAuth = (state) => state.auth;
export const selectRole = (state) => state.auth.role; 
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;

export default authSlice.reducer;
