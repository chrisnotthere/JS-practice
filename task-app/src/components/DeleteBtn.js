/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class DeleteBtn extends Component{
  constructor(props){
    super(props);
    
  }
  
  delete(e, task){
    this.props.deleteTask(e, task);
  }

  render() {
    
    return (
      <button
        className="deleteBtn"
        //onClick={() => this.props.deleteTask(this.props.task)
        onClick={(e) => this.delete(e, this.props.task)
      }>
        Delete Task
      </button>
    )
  }

}

export default DeleteBtn;
