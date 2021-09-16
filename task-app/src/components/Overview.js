/* eslint-disable no-useless-constructor */
// render our tasks

import React, { Component } from 'react';
import DeleteBtn from './DeleteBtn';

class Overview extends Component {

  constructor(props){
    super(props);
    
  }
  

    render(props) {
    
    return(
      <ul>
      {this.props.tasks.map((task) => {
        return (
        <li key={task.id}>
          {task.text} &emsp;   id:{task.myId} &emsp;
          <DeleteBtn 
            task={task}
            tasks={this.props.tasks}
            deleteTask={() => this.props.deleteTask()}  
          />
        </li>
        );
      })}
    </ul>
  );
    }
};

export default Overview;
