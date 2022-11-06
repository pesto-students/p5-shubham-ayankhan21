import React ,{ useState , useEffect } from 'react';
import Form from './components/Form';
import TodosList from './components/TodosList';

import './App.css';

const App = ()=> {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos]);
  
  return(
    <div className='container'>
      <div className='app-wrapper'>
      <div className='header'>
        <h1>TO-DO LIST</h1>
      </div>
        <div>
          <Form
            input = {input}
            setInput = {setInput}
            todos = {todos}
            setTodos = {setTodos}
          />
        </div>
        <div>
          <TodosList 
              todos={todos} 
              setTodos={setTodos} 
            />
        </div>
      </div>
    </div>
  )
}

export default App;
