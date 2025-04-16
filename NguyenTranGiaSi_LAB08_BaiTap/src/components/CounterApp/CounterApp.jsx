import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './counterSlice';

const CounterApp = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const handleInc = () => dispatch(increment());
    const handleDecre = () => dispatch(decrement());
    const handleReset = () => dispatch(reset());

    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
            <div className='bg-white p-6 rounded-lg shadow-lg'>
                <h1 className='text-xl font-semibold text-gray-700 mb-4 text-center'>Counter App</h1>
                <span className='text-xl font-semibold text-gray-700 mb-4 text-center'>Value: {count}</span>
                <div className='flex space-x-4'>
                    <button
                        className='px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-400 transition duration-200'
                        onClick={handleInc}
                    >
                        Increment
                    </button>
                    <button
                        className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400 transition duration-200'
                        onClick={handleDecre}
                    >
                        Decrement
                    </button>
                    <button
                        className='px-4 py-2 bg-amber-300 text-white rounded-md hover:bg-blue-400 transition duration-200'
                        onClick={handleReset}
                    >
                        Reset
                    </button>
                    <br />
                </div>
            </div>
        </div>
    );
};

export default CounterApp;
