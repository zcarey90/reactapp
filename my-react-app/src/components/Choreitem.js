import React, { Component } from "react";

export class ChoreItem extends Component {
  render() {
    return (
      <div>
        <p>{this.props.chore.title}</p>
      </div>
    );
  }
}

export default ChoreItem;
