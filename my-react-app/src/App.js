import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Chores from "./components/Chores";
import AddChore from "./components/AddChore";
import About from "./components/chapters/About";
import { v4 as uuidv4 } from "uuid";

import "./App.css";
class App extends Component {
  state = {
    chores: [
      {
        id: uuidv4(),
        title: "Clean garage",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Take the dog for a walk",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Wash my car",
        completed: false,
      },
    ],
  };

  checkDone = (id) => {
    this.setState({
      chores: this.state.chores.map((chore) => {
        if (chore.id === id) {
          chore.completed = !chore.completed;
        }
        return chore;
      }),
    });
  };

  delChore = (id) => {
    this.setState({
      chores: [...this.state.chores.filter((chore) => chore.id !== id)],
    });
  };

  addChore = (title) => {
    const newChore = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState({ chores: [...this.state.chores, newChore] });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="receptacle">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddChore addChore={this.addChore} />
                  <Chores
                    chores={this.state.chores}
                    checkDone={this.checkDone}
                    delChore={this.delChore}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
