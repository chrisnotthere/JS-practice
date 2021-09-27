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

    //this.deleteTask = this.deleteTask.bind(this);
    
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
    if(this.state.task.text === '') return;   //return if empty string
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { 
        text: '',
        id: uniqid(),
        myId: this.state.tasks.length + 1,
      },
    },
    () => console.log(this.state.tasks)
    )
  };

  deleteTask = (e, task) => {
    console.log('task info...  ' + JSON.stringify(task));
    console.log('task id: ' + task.myId);

    this.setState((prevState) => ({
      tasks: prevState.tasks.filter(li => li.myId !== task.myId),
    }));

    console.log(this.state.tasks);
    console.log(e);
    //console.log(e.target);

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
          task={task}
          deleteTask={(e) => this.deleteTask(e, task)}
        />
      </div>
    );
  }
}

export default App;
