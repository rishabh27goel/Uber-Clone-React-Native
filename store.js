import { configureStore } from '@reduxjs/toolkit';
import navReducer from './slices/navSlice';


const store = configureStore({
  reducer: {
    navigation : navReducer,
  },
});

export default store