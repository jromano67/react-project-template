import React, { Component } from "react";
import "./App.css";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";
const data2010 = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];

const data2011 = [
  { quarter: 1, earnings: 15000 },
  { quarter: 2, earnings: 12500 },
  { quarter: 3, earnings: 19500 },
  { quarter: 4, earnings: 13000 },
  { quarter: 5, earnings: 13000 },
  { quarter: 6, earnings: 13000 },
  { quarter: 7, earnings: 13000 },
  { quarter: 8, earnings: 13000 },
  { quarter: 9, earnings: 13000 },
  { quarter: 10, earnings: 13000 }
];

const data2012 = [
  { quarter: 1, earnings: 11500 },
  { quarter: 2, earnings: 13250 },
  { quarter: 3, earnings: 20000 },
  { quarter: 4, earnings: 15500 }
];

const data2013 = [
  { quarter: 1, earnings: 18000 },
  { quarter: 2, earnings: 13250 },
  { quarter: 3, earnings: 15000 },
  { quarter: 4, earnings: 12000 }
];
const data2014 = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];
const data2015 = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];
const data2016 = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];
const data2017 = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];
const data2018 = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];
const data2019 = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    fetch(
      "https://data.cityofnewyork.us/resource/csut-3wpr.json?$$app_token=2y6eroq5UDtsqbdRlo8SOA9rt"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data: data });
        console.log(this.state.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>Health</h1>

        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

        <VictoryChart domainPadding={11} theme={VictoryTheme.material}>
          <VictoryAxis dependentAxis tickFormat={(x) => `$${x / 1000}k`} />
          <VictoryAxis
            tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            tickFormat={[
              "2010",
              "2011",
              "2012",
              "2013",
              "2014",
              "2015",
              "2016",
              "2017",
              "2018",
              "2019"
            ]}
          />
          <VictoryBar data={data2010} x="quarter" y="earnings" />
          <VictoryBar data={data2011} x="quarter" y="earnings" />
          <VictoryBar data={data2012} x="quarter" y="earnings" />
          <VictoryBar data={data2013} x="quarter" y="earnings" />
          <VictoryBar data={data2014} x="quarter" y="earnings" />
          <VictoryBar data={data2015} x="quarter" y="earnings" />
          <VictoryBar data={data2016} x="quarter" y="earnings" />
          <VictoryBar data={data2017} x="quarter" y="earnings" />
          <VictoryBar data={data2018} x="quarter" y="earnings" />
          <VictoryBar data={data2019} x="quarter" y="earnings" />
        </VictoryChart>
      </div>
    );
  }
}

export default App;
