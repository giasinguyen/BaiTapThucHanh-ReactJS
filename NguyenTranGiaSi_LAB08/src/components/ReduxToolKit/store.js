import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
const storeToolKit = configureStore({
    reducer: {
        counter: counterSlice
    },
});

export default storeToolKit;
