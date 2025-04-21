import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isLoggedIn: false,
  error: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = { 
        username: action.payload.username, 
        name: action.payload.username 
      };
      state.error = null;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    setUserInfo: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const { login, logout, setUserInfo, setError } = authSlice.actions;
export default authSlice.reducer;