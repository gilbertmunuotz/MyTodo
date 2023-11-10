import React, { Component } from 'react'
import MyTodos from './MyTodos'
import NewTask from './NewTask'

export class App extends Component {

  state = {
    Todos: [
      { id: 1, content: 'Gaming' },
      { id: 2, content: 'Sleeping' },
      { id: 3, content: 'Reading' }
    ]
  }

  deleteTask = (id) => {
    const newTodos = this.state.Todos.filter(Todo => {
      return Todo.id !== id
    })

    this.setState({
      Todos: newTodos
    })
  }

  addTask = (Todo) => {
    Todo.id = Math.random()
    let newTodos = [...this.state.Todos, Todo]
    this.setState({
      Todos: newTodos
    })
  }

  render() {
    return (
      <div className='App'>
        <div className="container text-center text-blue-700 pt-5 text-5xl">My Tasks</div>
        <MyTodos Todos={this.state.Todos} deleteTask={this.deleteTask} />
        <NewTask addTask={this.addTask} />
      </div>
    )
  }
}

export default App