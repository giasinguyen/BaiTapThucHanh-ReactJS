import { useEffect, useReducer, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [user, setUser] = useState([])
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res) => setUser(res.data))
    .catch(console.error())
  }, [])

  const reducer = (state, action) => {
    switch (action.type) {
      case '+':
        return { ...state, count: state.count + 1 };
      case '-':
        return { ...state, count: state.count - 1 };
      case 'reset':
        return {...state, count: 0}
      default:
        return state
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handleInc = () => {
    dispatch({ type: '+' })
  };

  const handleDecre = () => {
    dispatch({ type: '-' })
  };

  const handleReset = () =>{
    dispatch({type: 'reset'})
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-6 rounded-lg shadow-lg'>
        <span className='text-xl font-semibold text-gray-700 mb-4'>Value: {state.count}</span>
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

      <ul>
        {users.map((user, key) => {
        })}
      </ul>
    </div>
  )
}

export default App;
