import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor () {
    super()

    this.state = {
      isLoaded : false,
      plateStack : [],
      budget : 50,
      purchased : []
    }
  }

  sushiRollClickHandler = (event) => {
    const purchasedRoll = this.state.sushiRolls.find(sushiRoll => {
      return (
        sushiRoll.id === parseInt(event.target.id,10)
      )
    })
    if (purchasedRoll.price <= this.state.budget) {
      this.setState({budget: this.state.budget - purchasedRoll.price})
      this.addPlate()
      this.setState({purchased : this.state.purchased.concat(purchasedRoll.id)})
    } else {
    }

  }

  addPlate = () => {
    this.setState({ plateStack : this.state.plateStack.concat("plate")})
  }

  componentDidMount () {
    fetch(API)
      .then(response => response.json())
      .then(sushiRolls => {
        this.setState({sushiRolls:sushiRolls,
                      isLoaded : true})
      })
  }

  render() {
    return (
      <div className="app">
        {this.state.isLoaded === true ? <SushiContainer 
                                          sushiRollClickHandler={this.sushiRollClickHandler} 
                                          sushiRolls={this.state.sushiRolls} 
                                          purchased={this.state.purchased}
                                        /> : "Loading"}
        <Table budget={this.state.budget} plateStack={this.state.plateStack}/>
      </div>
    );
  }
}

export default App;