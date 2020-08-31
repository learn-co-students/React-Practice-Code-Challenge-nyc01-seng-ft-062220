import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import SushiForm from './containers/SushiForm'

const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    eaten: [],
    wallet: 100,
    displayIndex: 0
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
    //update the wallet amount 
    const newWallet = this.state.wallet - sushiObj.price
    //we keep track using the eaten array since user can only eat once from 1 plate. 
    //also user cannot eat if they have no money
    if (!this.state.eaten.includes(sushiObj) && newWallet >=0 ) {
      this.setState({
        eaten: [...this.state.eaten, sushiObj], //update the eaten array
        wallet: newWallet //update wallet amount
      })
    }
  }

  moreSushi = () => {
    let newDisplayIndex = this.state.displayIndex + 4

    //condition where when all the sushi runs out... reset back to 0 
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

  submitHandler = e => {
    e.preventDefault()
    let addedAmount = parseInt(e.target[0].value)
    if(addedAmount > 0){
      let updateWallet = this.state.wallet + addedAmount
      this.setState({ wallet: updateWallet })
    }
  }

  render() {
    return (
      <div className="app">
      <SushiContainer sushis={this.displayFourSushi()}
      moreSushi={this.moreSushi}
      eatSushi={this.eatSushi}
      eaten={this.state.eaten} />
      <Table newBudget={this.state.wallet}
      eaten={this.state.eaten} />
      <SushiForm submitHandler={this.submitHandler} />
      </div>
    );
  }
}

export default App;