import { Provider } from 'react-redux'
import './App.css'
import Reducer from './components/Reducer/Reducer'
import store from './components/Redux/store'
import storeToolKit from './components/ReduxToolKit/store'
import Redux from './components/Redux/Redux'
import ReduxToolKit from './components/ReduxToolKit/ReduxToolKit'
function App() {

  return (
    <>
      <Reducer/>

      <Provider store={store}>
        <Redux/>
      </Provider>

      <Provider store={storeToolKit}>
        <ReduxToolKit/>
      </Provider>
    </>
  )
}

export default App
