// render our tasks

import React from 'react';
import DeleteBtn from './DeleteBtn';

const Overview = (props) => {
  const { tasks } = props;

  return(
    <ul>
      {tasks.map((task) => {
        return (
        <li key={task.id}>
          {task.text}, id:{task.myId} &emsp;
          <DeleteBtn 
            task={task}
            deleteTask={() => props.deleteTask(task)}  
          />
        </li>
        );
      })}
    </ul>
  );
};

export default Overview;
