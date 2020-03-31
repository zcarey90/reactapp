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

  render() {
    const { id, title } = this.props.chore;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.checkDone.bind(this, id)}
          />{" "}
          {title}
          <button style={buttonStyle}>x</button>
        </p>
      </div>
    );
  }
}

ChoreItem.propTypes = {
  chore: PropTypes.object.isRequired
};

const buttonStyle = {
  background: "green",
  color: "yellow",
  border: "none",
  padding: "5px 8px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};

export default ChoreItem;
