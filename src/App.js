import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <ToDo name = "Wash dishes"/>
          <ToDo name = "Clean house"/>
        </ul>
      </div>
    );
  }
}

export default App;
