import React from 'react';
import './App.css';
import TodoList from './components/todo/TodoList'; 
import AddTodo from './components/addtodo/AddTodo'; 


function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <TodoList></TodoList>
      </header>
    </div>
  );
}

export default App;
