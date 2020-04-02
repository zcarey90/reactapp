import React, { Component } from "react";
import Header from "./components/layout/Header";
import Chores from "./components/Chores";
import AddChore from "./components/AddChore";

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
        completed: true
      },
      {
        id: 3,
        title: "Wash my car",
        completed: false
      }
    ]
  };

  checkDone = id => {
    this.setState({
      chores: this.state.chores.map(chore => {
        if (chore.id === id) {
          chore.completed = !chore.completed;
        }
        return chore;
      })
    });
  };

  delChore = id => {
    this.setState({
      chores: [...this.state.chores.filter(chore => chore.id !== id)]
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <AddChore />
        <Chores
          chores={this.state.chores}
          checkDone={this.checkDone}
          delChore={this.delChore}
        />
      </div>
    );
  }
}

export default App;
