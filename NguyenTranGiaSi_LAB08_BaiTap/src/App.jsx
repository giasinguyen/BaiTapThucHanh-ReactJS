import './App.css'
import { Provider } from 'react-redux'
import storeCounterApp from './components/CounterApp/store'
import CounterApp from './components/CounterApp/CounterApp'
import { storeToDoApp } from './components/ToDoApp/store'
import ToDoApp from './components/ToDoApp/TodoApp'
function App() {

  return (
    <>
      <Provider store={storeCounterApp}>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <CounterApp />
        </div>
      </Provider>

      <Provider store={storeToDoApp}>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <ToDoApp />
        </div>
      </Provider>
    </>
  )
}

export default App
