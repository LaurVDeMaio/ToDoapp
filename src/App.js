import React, { Component } from "react";
import "./App.css";
import TodoParent from "./components/TodoParent";
import LottieAnim from "./components/LottieAnim";
import LottieAnimRobo from "./components/LottieAnimRobo";

class App extends Component {
  render() {
    return (
      <div className="App-header">
        <TodoParent />
        <LottieAnim />
        <LottieAnimRobo />
      </div>
    );
  }
}

export default App;
