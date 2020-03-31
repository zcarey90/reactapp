import React, { Component } from "react";
import ChoreItem from "./ChoreItem";
import PropTypes from "prop-types";

class Chores extends Component {
  render() {
    return this.props.chores.map(chore => (
      <ChoreItem
        key={chore.id}
        chore={chore}
        checkDone={this.props.checkDone}
        delChore={this.props.delChore}
      />
    ));
  }
}

Chores.propTypes = {
  chores: PropTypes.array.isRequired
};

export default Chores;
