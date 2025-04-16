import { createStore } from 'redux';
import counterReducer from './CounterReducer';

const store = createStore(counterReducer);

export default store;
