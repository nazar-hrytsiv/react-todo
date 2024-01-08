import React from 'react'
import Context from './context'
import TodoList from './Todo/TodoList'
import AddTodo from './Todo/AddTodo'

function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: 'clean room'},
    {id: 2, completed: false, title: 'walk dog'},
    {id: 3, completed: false, title: 'buy milk'}
  ])

  function toggleTodo(id) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }

      return todo
    }))
  }

  function addTodo(value) {
    setTodos(todos.concat([{
      id: Date.now(),
      completed: false,
      title: value
    }]))
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <Context.Provider value={{removeTodo}}>
      <div className="wrapper">
        <h1 className="title">Todo</h1>
        <AddTodo onCreate={addTodo}/>
        {todos.length ? <TodoList todos={todos} onChange={toggleTodo}/> : <p>empty list!</p>}
      </div>
    </Context.Provider>
  );
}

export default App;
