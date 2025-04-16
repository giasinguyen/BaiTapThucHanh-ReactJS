import { configureStore } from '@reduxjs/toolkit';
import ToDoRedux from './ToDoRedux';

export const storeToDoApp = configureStore({
  reducer: {
    todos: ToDoRedux,
  },
});
