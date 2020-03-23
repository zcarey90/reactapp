import React, { Component } from "react";
import PropTypes from "prop-types";

export class ChoreItem extends Component {
  getStyle = () => {
    return {
      background: "purple",
      padding: "11px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.chore.completed ? "line-through" : "none"
    };
  };

  checkDone = e => {
    console.log(this.props);
  };

  render() {
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.checkDone} /> {""}
          {this.props.chore.title}
        </p>
      </div>
    );
  }
}

ChoreItem.propTypes = {
  chore: PropTypes.object.isRequired
};

export default ChoreItem;
