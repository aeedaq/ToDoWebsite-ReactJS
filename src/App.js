
import { func } from 'prop-types';
import React from 'react';
import Context from './context';
import AddTodo from './Todo/AddTodo';

import TodoList from './Todo/TodoList';

function App() {

  let [todos, setTodos] = React.useState([
    {
      id: 1,
      completed: false,
      title: 'Buy bread'
    },
    {
      id: 2,
      completed: false,
      title: 'Buy milk'
    },
    {
      id: 3,
      completed: false,
      title: 'Buy butter'
    }
  ]
  )
  

  function toggleTodo(id) {
    setTodos(
    todos = todos.map
    (todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    }
    )
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title){
    setTodos(todos.concat
      (
        [
          {
            title,
            id: Date.now(),
            completed: false
          }
        ]
      )
    )
  }

  return (
    <Context.Provider value = {{removeTodo}}>
      <div className="wrapper">
        <h1>Todo List with REACT JS</h1>
        <AddTodo
         onCreate = {addTodo}
          />
        {todos.length ? <TodoList 
          todos={todos} 
          onToggle={toggleTodo}
          /> : <p>no todos </p>
            }
        
      </div>
    </Context.Provider>
  )
}

export default App;
