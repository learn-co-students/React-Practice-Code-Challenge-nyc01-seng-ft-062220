import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    eaten: [],
    wallet: 100,
    displayIndex: 0,
    displayflag: false
  }

  //api call 
  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then((data) => {
      this.setState({sushis: data, displayFlag: true})
    })
  }


  eatSushi = (sushiObj) => {
    const newWallet = this.state.wallet - sushiObj.price

    if (!this.state.eaten.includes(sushiObj) && newWallet >=0 ) {
      this.setState({
        eaten: [...this.state.eaten, sushiObj],
        wallet: newWallet
      })
    }
  }

  moreSushi = () => {
    let newDisplayIndex = this.state.displayIndex + 4

    //bonus
    if(newDisplayIndex >= this.state.sushis.length){
      newDisplayIndex = 0
    }

    this.setState({
      displayIndex: newDisplayIndex
    })
  }

  displayFourSushi = () => {
    return this.state.sushis.slice(this.state.displayIndex, this.state.displayIndex+4)
  }


  render() {
    return (
      <div className="app">
      {this.state.displayFlag === true ? <SushiContainer sushis={this.displayFourSushi()}
      moreSushi={this.moreSushi}
      eatSushi={this.eatSushi}
      eaten={this.state.eaten} /> : "Loading Sushi"}
      
      <Table newBudget={this.state.wallet}
      eaten={this.state.eaten} />
      </div>
    );
  }
}

export default App;