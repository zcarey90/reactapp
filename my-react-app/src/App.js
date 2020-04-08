import React, { Component } from "react";
import Header from "./components/layout/Header";
import Chores from "./components/Chores";
import AddChore from "./components/AddChore";
import uuid from "uuid";

import "./App.css";
class App extends Component {
  state = {
    chores: [
      {
        id: uuid.v4(),
        title: "Clean garage",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Take the dog for a walk",
        completed: false
      },
      {
        id: uuid.v4(),
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

  addChore = title => {
    const newChore = {
      id: uuid.v4(),
      title,
      completed: false
    };
    this.setState({ chores: [...this.state.chores, newChore] });
  };

  render() {
    return (
      <div className="App">
        <div className="receptacle">
          <Header />
          <AddChore addChore={this.addChore} />
          <Chores
            chores={this.state.chores}
            checkDone={this.checkDone}
            delChore={this.delChore}
          />
        </div>
      </div>
    );
  }
}

export default App;
