import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToDo, removeToDo, toggleToDo } from './ToDoRedux';
function TodoApp() {
    const [text, setText] = useState('');
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
  
    const handleAddToDo = () => {
      if (text.trim() === '') return;
      dispatch(addToDo({ text }));
      setText('');
    };
  
    const handleToggleToDo = (id) => {
      dispatch(toggleToDo({ id }));
    };
  
    const handleRemoveToDo = (id) => {
      dispatch(removeToDo({ id }));
    };
  
    return (
      <div className="App flex flex-col items-center p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Todo App</h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter a new todo"
          />
          <button
            onClick={handleAddToDo}
            className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition duration-200"
          >
            Add Todo
          </button>
        </div>
  
        <ul className="w-full max-w-lg space-y-4">
          {todos.map((todo) => (
            <li key={todo.id} className="flex justify-between items-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
              <span
                className={`flex-1 cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''}`}
                onClick={() => handleToggleToDo(todo.id)}
              >
                {todo.text}
              </span>
              <button
                onClick={() => handleRemoveToDo(todo.id)}
                className="ml-4 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition duration-200"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

export default TodoApp


