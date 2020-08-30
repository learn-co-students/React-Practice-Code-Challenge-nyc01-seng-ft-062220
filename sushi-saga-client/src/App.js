import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import ReloadFund from './components/ReloadFund';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  
  state ={
    sushisArray: [],
    eatenSushi: [],
    totalMoney: 100
  }

  getSushi = () => {
    fetch(API)
    .then(resp => resp.json())
    .then(sushisArray => {
      sushisArray.forEach(sushiObj => sushiObj.new = true)
      this.setState({ sushisArray: sushisArray})
    })
  }

  handleEatenSushi = (sushiObj, newBalance) => {
    this.setState({
      eatenSushi: [...this.state.eatenSushi, sushiObj],
      totalMoney: newBalance
    })
  }

  componentDidMount(){
    this.getSushi()
  }

  reloadHandler = (funding) => {
    this.setState({
      totalMoney: this.state.totalMoney + Number(funding)
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushisArray={this.state.sushisArray} handleEatenSushi={this.handleEatenSushi} remainingBalance={this.state.totalMoney} />
        <Table totalMoney={this.state.totalMoney} eatenSushi={this.state.eatenSushi} />
        <ReloadFund reloadHandler={this.reloadHandler} />
      </div>
    );
  }
}

export default App;