/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class DeleteBtn extends Component{
  constructor(props){
    super(props);
  }

  

  render() {
    return (
      <button
        className="deleteBtn"
        onClick={() => this.props.deleteTask('test')
      }>
        Delete Task
      </button>
    )
  }

}

export default DeleteBtn;
