/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class DeleteBtn extends Component{
  constructor(props){
    super(props);
    
  }
  
  delete(task){
    this.props.deleteTask(task);
  }

  render() {
    
    return (
      <button
        className="deleteBtn"
        //onClick={() => this.props.deleteTask(this.props.task)
        onClick={() => this.delete(this.props.task)
      }>
        Delete Task
      </button>
    )
  }

}

export default DeleteBtn;
