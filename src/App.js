import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoForm, TodoList } from './components/todo';
import {addTodo, generateId, findById, toggleTodo, updateTodo, removeTodo} from './lib/todoHelpers'
import {pipe, partial} from './lib/utils'
class App extends Component {
  state = {
    todos: [
      {id: 1, name: 'learn js', isCompleted: true},
      {id: 2, name: 'learn react', isCompleted: false},
      {id: 3, name: 'learn css', isCompleted: false}
    ],
    currentTodo: ''
  }

  handleRemove = (id, evt) => {
    evt.preventDefault()
    const updatedTodos = removeTodo(this.state.todos, id)
    this.setState({
      todos: updatedTodos
    })
  }

  handleToggle = (id) => {
    const getUpdatedTodos = pipe(findById, toggleTodo, partial(updateTodo, this.state.todos))
    const updatedTodos = getUpdatedTodos(id, this.state.todos)
    // const todo = findById(id, this.state.todos)
    // const toggled = toggleTodo(todo)
    // const updatedTodos = updateTodo(this.state.todos, toggled)
    this.setState({todos: updatedTodos})
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    const newId = generateId()
    const newTodo = {id: newId, name: this.state.currentTodo, isCompleted: false}
    const updatedTodos = addTodo(this.state.todos, newTodo)

    this.setState({
      todos: updatedTodos,
      currentTodo: '',
      errorMessage: ''
    })
  }

  handleEmptySubmit = (evt) => {
    evt.preventDefault()
    this.setState({
      errorMessage: 'Please supply a todo name'
    })
  }

  handleInputChange = (evt) => {
    this.setState({
      currentTodo: evt.target.value
    })
  }

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Todos</h2>
        </header>
        <div className="Todo-App">
          {this.state.errorMessage && <span className="error">{this.state.errorMessage}</span>}
          <TodoForm 
            handleInputChange={this.handleInputChange} 
            currentTodo={this.state.currentTodo}
            handleSubmit={submitHandler}/>

          <TodoList handleRemove={this.handleRemove} handleToggle={this.handleToggle} todos={this.state.todos}/>
        </div>
      </div>
    );
  }
}

export default App;
