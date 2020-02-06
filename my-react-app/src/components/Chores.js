import React, { Component } from "react";
import ChoreItem from "./ChoreItem";

class Chores extends Component {
  render() {
    return this.props.chores.map(chore => <ChoreItem />);
  }
}

export default Chores;
