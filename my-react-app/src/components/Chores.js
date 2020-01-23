import React, { Component } from "react";

class Chores extends Component {
  render() {
    return this.props.chores.map(chore => <h3>{chore.title}</h3>);
  }
}

export default Chores;
