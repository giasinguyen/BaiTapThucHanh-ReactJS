import "./App.css";
import { Provider } from "react-redux";
import storeCounterApp from "./components/CounterApp/store";
import CounterApp from "./components/CounterApp/CounterApp";
import { storeToDoApp } from "./components/ToDoApp/store";
import ToDoApp from "./components/ToDoApp/TodoApp";
import ToggleTheme from "./components/ToggleTheme/ToggleTheme";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import AuthManager from "./components/LoginForm/AuthManager";
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

      <ToggleTheme></ToggleTheme>

      <ShoppingCart/>

      <AuthManager/>
    </>
  );
}

export default App;
