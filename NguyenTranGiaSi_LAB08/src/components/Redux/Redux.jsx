import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './actions/actions';

const Redux = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleInc = () => dispatch(increment());
  const handleDecre = () => dispatch(decrement());
  const handleReset = () => dispatch(reset());

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white">
        <h1 className="text-xl text-gray-700 mb-4 text-center">Redux</h1>
        <span className="text-xl text-gray-700 mb-4">Value: {count}</span>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-amber-500 text-white" onClick={handleInc}>
            Increment
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white" onClick={handleDecre}>
            Decrement
          </button>
          <button className="px-4 py-2 bg-amber-300 text-white" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Redux;
