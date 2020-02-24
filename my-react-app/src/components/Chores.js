import React, { Component } from "react";
import ChoreItem from "./ChoreItem";

class Chores extends Component {
  render() {
    return this.props.chores.map(chore => <ChoreItem chore={chore} />);
  }
}

export default Chores;
