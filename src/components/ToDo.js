import React, {Component} from 'react';

class ToDo extends Component {
  render(){
    return(
      <li>{this.props.name}</li>
    )
  }
}

export default ToDo;
