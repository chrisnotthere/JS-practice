/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class DeleteBtn extends Component{
  constructor(props){
    super(props);
    
  }

  // deleteTask(task){
  //   this.props.delete(task);
  // }
  

  render() {
    
    return (
      <button
        className="deleteBtn"
        onClick={() => this.props.deleteTask(this.props.task)
      }>
        Delete Task
      </button>
    )
  }

}

export default DeleteBtn;
