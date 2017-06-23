import React, { Component } from 'react'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'
import './App.css'

class App extends Component {
  render() {
    return (
        <div className="App__container">
            <AddTask />
            <TaskList />
        </div>
    );
  }
}

export default App;
