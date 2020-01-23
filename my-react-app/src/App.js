import React, { Component } from "react";
import Chores from "./components/Chores";

import "./App.css";
class App extends Component {
  state = {
    chores: [
      {
        id: 1,
        title: "Clean garage",
        completed: false
      },
      {
        id: 2,
        title: "Take the dog for a walk",
        completed: false
      },
      {
        id: 3,
        title: "Wash my car",
        completed: false
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <Chores chores={this.state.chores} />
      </div>
    );
  }
}

export default App;
