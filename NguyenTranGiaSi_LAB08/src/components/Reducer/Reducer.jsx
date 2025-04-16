import React, { useReducer } from 'react'

function Reducer() {
    const reducer = (state, action) => {
        switch (action.type) {
            case '+':
                return { ...state, count: state.count + 1 };
            case '-':
                return { ...state, count: state.count - 1 };
            case 'reset':
                return { ...state, count: 0 }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, { count: 0 });

    const handleInc = () => {
        dispatch({ type: '+' })
    };

    const handleDecre = () => {
        dispatch({ type: '-' })
    };

    const handleReset = () => {
        dispatch({ type: 'reset' })
    }

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='bg-white p-6'>
                <h1 className='text-xl text-gray-700 mb-4 text-center'>Reducer</h1>
                <span className='text-xl text-gray-700 mb-4'>Value: {state.count}</span>
                <div className='flex space-x-4'>
                    <button
                        className='px-4 py-2 bg-amber-500 text-white'
                        onClick={handleInc}
                    >
                        Increment
                    </button>
                    <button
                        className='px-4 py-2 bg-blue-500 text-white'
                        onClick={handleDecre}
                    >
                        Decrement
                    </button>
                    <button
                        className='px-4 py-2 bg-amber-300 text-white'
                        onClick={handleReset}
                    >
                        Reset
                    </button>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default Reducer
