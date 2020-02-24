import React, { Component } from "react";
import PropTypes from "prop-types";

export class ChoreItem extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "purple" }}>
        <p>{this.props.chore.title}</p>
      </div>
    );
  }
}

ChoreItem.propTypes = {
  chore: PropTypes.object.isRequired
};

export default ChoreItem;
