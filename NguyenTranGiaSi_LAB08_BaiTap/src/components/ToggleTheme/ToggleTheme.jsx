import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Provider } from 'react-redux';
import { themeStore } from './store';
import { toggleTheme } from './themeSlice';

const ThemeToggler = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  return (
    <div className={`flex items-center justify-center min-h-screen ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <button
        onClick={() => dispatch(toggleTheme())}
        className={`p-4 text-white rounded ${darkMode ? 'bg-blue-500' : 'bg-blue-700'}`}
      >
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
};

const ToggleTheme = () => (
  <Provider store={themeStore}>
    <ThemeToggler />
  </Provider>
);

export default ToggleTheme;