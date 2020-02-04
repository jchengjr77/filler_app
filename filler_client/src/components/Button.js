import React, { Component } from "react";
import AwesomeButton from "react-awesome-button";

export default class Button extends Component {
  render() {
    let { title, task } = this.props;
    return <AwesomeButton onClick={task}>{title}</AwesomeButton>;
  }
}
