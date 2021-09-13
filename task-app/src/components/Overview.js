// render our tasks

import React from 'react';
import DeleteBtn from './DeleteBtn';

const Overview = (props) => {
  const { tasks } = props;

// deleteTask(task){
  //   this.props.delete(task);
  // }

  return(
    <ul>
      {tasks.map((task) => {
        return (
        <li key={task.id}>
          {task.text} &emsp;   id:{task.myId} &emsp;
          <DeleteBtn 
            task={task}
            tasks={tasks}
            deleteTask={() => props.deleteTask(task)}  
          />
        </li>
        );
      })}
    </ul>
  );
};

export default Overview;
