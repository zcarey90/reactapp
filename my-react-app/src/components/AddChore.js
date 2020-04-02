import React, { Component } from "react";

export class AddChore extends Component {
  render() {
    return (
      <form style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          style={{ flex: "10", padding: "5px" }}
          placeholder="Add Chore ..."
        />
        <input
          type="submit"
          value="Submit"
          className="button"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

export default AddChore;
