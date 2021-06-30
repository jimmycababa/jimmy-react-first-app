import React, { useState } from 'react';
import TodoList from './TodoList';
import './index.css'



function App() {
  const [characters, characterData] = useState([ 'Todo 1' ])
  return (
    <div>
      <TodoList characters={characters} />
      
    </div>
  );
}

export default App;
