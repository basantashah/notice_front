import React, { Component } from 'react';
import './App.css';
import Todos from './Notice/Notice';


// I will comment everything we do//
class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Lets make a digital notice board',
        completed: false
      },

      {
        id: 2,
        title: 'notice from RTE department',
        completed: false
      },


      {
        id: 3,
        title: 'notice from academic department',
        completed: false
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
