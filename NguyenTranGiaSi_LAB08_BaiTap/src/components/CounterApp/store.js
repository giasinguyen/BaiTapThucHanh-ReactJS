import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
const storeCounterApp = configureStore({
    reducer: {
        counter: counterSlice
    },
});

export default storeCounterApp;
