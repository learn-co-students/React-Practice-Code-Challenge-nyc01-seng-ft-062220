import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3001/sushis"

class App extends Component {

  constructor(){

    super()
    this.state ={
      originalSushi: [],
      currentPage: 0,
      currentSushi: [],
      eatenSushi: [],
      wallet: 100,
      numberOfSushi: 0
    }
  }

  getSushi = (startNumber = 0) => {
    fetch(API)
    .then(response => response.json())
    .then( sushiObj => {
      this.setState({...this.state,
        originalSushi: sushiObj,
        currentPage: startNumber +4,
       currentSushi: sushiObj.slice(startNumber,startNumber + 4),
       numberOfSushi: sushiObj.length
      })
    }
    )
  }


  moreSushi = () =>{
    if( this.state.currentPage < this.state.numberOfSushi){
    console.log(this.state.numberOfSushi,this.state.currentPage)
     this.getSushi(this.state.currentPage)
    }else{
      console.log(this.state.eatenSushi)
      this.getSushi(0)
    }
  }

  eatingSushi = (sushi) =>{
    let eatenSushi = this.state.eatenSushi
    let wallet = this.state.wallet
    if (!this.state.eatenSushi.includes(sushi) && this.state.wallet >= sushi.price){
      eatenSushi.push(sushi)
      wallet -= sushi.price
    this.setState({...this.state,
    eatenSushi: eatenSushi,
    wallet: wallet})}
  }



  componentDidMount(){
    this.getSushi()
  }



  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.currentSushi} moreSushi={this.moreSushi} eatingSushi={this.eatingSushi} eatenSushi={this.state.eatenSushi} />
        <Table eatenSushi = {this.state.eatenSushi} wallet={this.state.wallet}/>
      </div>
    );
  }
}

export default App;