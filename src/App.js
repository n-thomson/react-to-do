import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [{description: 'Walk the dog', isCompleted: true},
        {description: 'Clean the house', isCompleted: true},
        {description: 'Do laundry', isCompleted: false}
      ],
      newToDoDescription : ''
    }
  }

  toggleComplete(index){
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({todos:todos});
  }

  handleChange(e){
    this.setState({newToDoDescription: e.target.value})
    console.log('triggered');
  }

  handleSubmit(e){
    e.preventDefault();
    if (!this.state.newToDoDescription){return}
    const newToDo = {description: this.state.newToDoDescription, isCompleted: false};
    this.setState({todos: [...this.state.todos, newToDo], newToDoDescription: ''});
    console.log('submit triggered')
  }

  deleteToDo(index){
    const deleteItem = this.state.todos[index];
    this.setState({todos: [...this.state.todos.filter(todo => todo!==deleteItem)]})
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.todos.map((todo, index) =>
            <ToDo key = {index} description = {todo.description} isCompleted = {todo.isCompleted} toggleComplete = {() => this.toggleComplete(index)} deleteToDo = {() => this.deleteToDo(index)}/>
          )}
        </ul>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type ='text' value = {this.state.newToDoDescription} onChange = {(e)=>this.handleChange(e)}/>
          <input type ='submit'/>
        </form>
      </div>
    );
  }
}

export default App;
