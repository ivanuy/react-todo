import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoForm, TodoList } from './components/todo';
import {addTodo, generateId} from './lib/todoHelpers'

class App extends Component {
  constructor() {
    super()

    this.state = {
      todos: [
        {id: 1, name: 'learn js', isCompleted: true},
        {id: 2, name: 'learn react', isCompleted: false},
        {id: 3, name: 'learn css', isCompleted: false}
      ],
      currentTodo: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(evt) {
    evt.preventDefault()
    const newId = generateId()
    const newTodo = {id: newId, name: this.state.currentTodo, isCompleted: false}
    const updatedTodos = addTodo(this.state.todos, newTodo)

    this.setState({
      todos: updatedTodos,
      currentTodo: ''
    })
  }

  handleInputChange(evt) {
    this.setState({
      currentTodo: evt.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Todos</h2>
        </header>
        <div className="Todo-App">
          <TodoForm 
            handleInputChange={this.handleInputChange} 
            currentTodo={this.state.currentTodo}
            handleSubmit={this.handleSubmit}/>

          <TodoList todos={this.state.todos}/>
        </div>
      </div>
    );
  }
}

export default App;
