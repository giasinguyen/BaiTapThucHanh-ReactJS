import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: false
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    }
  }
});

export const { toggleTheme, setDarkMode } = themeSlice.actions;
export default themeSlice.reducer;