import React from 'react';
import TodoList from './TodoList';
import './index.css'

function App() {
  return (
    <div>
      <TodoList />
      <input type="text"></input>
      <button>Clear Completed</button>
      <button>Delete Todos</button>
      <div>0 Todos Remaining</div>
    </div>
  );
}

export default App;
