import './App.css'
import { Provider } from 'react-redux'
import storeCounterApp from './components/CounterApp/store'
import CounterApp from './components/CounterApp/CounterApp'
function App() {

  return (
    <>
      <Provider store={storeCounterApp}>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <CounterApp />
        </div>
      </Provider>
    </>
  )
}

export default App
