import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './Features/Task'
import user from './Features/User'
export const store = configureStore({
  reducer: {
      todos : todoReducer,
      user : user
  },
});


