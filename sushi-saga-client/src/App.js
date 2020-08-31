import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3001/sushis"

  
class App extends Component {
 
  state = {
    sushis: [],
    eatenSushi: [],
    wallet: 600
  }


  componentDidMount(){
    fetch(API)
    .then(response =>response.json())
    .then(sushis => {
      this.setState({sushis: sushis})
      })  
     
  }

  checkWallet = () => {
    if(this.state.wallet < 0){
      alert("You aint got any money fool, GTFOH!")
    }
  }
  
  onClick = (sushiObj) => {
     this.setState({
       sushis: this.state.sushis.filter(item => item.id !== sushiObj.id),
       eatenSushi: [...this.state.eatenSushi, sushiObj]
     })
     this.subtractMonies(sushiObj)
  }

  subtractMonies = (sushiObj) => {
    this.setState({ 
      wallet: this.state.wallet - sushiObj.price
    })
  }

  


  render() {
    
    this.checkWallet()
    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushis} onClick={this.onClick} />
        <Table array={this.state.eatenSushi} wallet={this.state.wallet}/>
      </div>
    );
  }
}

export default App;