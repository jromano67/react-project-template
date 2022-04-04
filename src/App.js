import React, { Component } from "react";
import "./App.css";
import Card from "./Components/Card";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack
} from "victory";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <h1>Health</h1>
        
        <VictoryChart />
      </div>
    );
  }
}

export default App;
