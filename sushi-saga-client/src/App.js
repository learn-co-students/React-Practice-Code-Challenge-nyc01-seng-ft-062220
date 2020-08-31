import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushiArray: [],
    eatenSushiArray: [],
    money: 100
  }

  appHandler = (price) => {
    if (this.state.money >= price) {
      this.setState({
        eatenSushiArray: this.state.eatenSushiArray.concat(true),
        money: this.state.money - price
      })
      return true
    } else {
      return false
    }

    
  }

  getSushi = () => {
    fetch(API)
    .then(r => r.json())
    .then(sushiData => {
      this.setState({
        sushiArray: sushiData
      })
    })
  }

  componentDidMount() {
    this.getSushi()
  }

  render() {
    return (
      <div className="app">
        <SushiContainer appHandler={this.appHandler} money={this.state.money} sushiArray={this.state.sushiArray}/>
        <Table eatenSushiArray={this.state.eatenSushiArray} money={this.state.money}/>
      </div>
    );
  }
}

export default App;