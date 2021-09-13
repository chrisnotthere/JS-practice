import React, { Component } from "react";
import uniqid from 'uniqid';
import Overview from './components/Overview'

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: { 
        text: '',
        id: uniqid(),
        myId: 0,
    },
      tasks: [],
    };
    
    this.deleteTask = this.deleteTask.bind(this);
    this.addTask = this.addTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      task : {
        text: e.target.value,
        id: this.state.task.id,
        myId: this.state.tasks.length + 1,
      }
    });
  };

  addTask = (e) => {
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { 
        text: '',
        id: uniqid(),
        myId: this.state.tasks.length + 1,
      },
    });
    console.log(this.state.tasks)
  };

  deleteTask = (task) => {
    console.log('task info...  ' + JSON.stringify(task));
    console.log('task id: ' + task.myId);
  }

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
          <label htmlFor="taskInput">Enter task: </label>
          <input 
            type="text" 
            id="taskInput" 
            onChange={this.handleChange}
            value={task.text}
          />
          <button onClick={() => this.addTask()}>
            Add Task
          </button>
        <Overview 
          tasks={tasks} 
          deleteTask={() => this.deleteTask(task)}
        />
      </div>
    );
  }
}

export default App;
