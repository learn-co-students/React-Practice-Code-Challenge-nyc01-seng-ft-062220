import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushiArr: [],
    eaten: [],
    index: 0,
    money: 100
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(sushis => {
      this.setState({sushiArr: sushis})
    })
  }

  pickFourSushi = () => {
    return this.state.sushiArr.slice(this.state.index, this.state.index+4)
  }

  moreSushi = () => {
    let newIndex = this.state.index + 4
    if (newIndex >= this.state.sushiArr.length){
      newIndex = 0
    }

    this.setState({index: newIndex})
  }

  eatSushi = (sushi) => {
    let newMoney = this.state.money-sushi.price
    if (!this.state.eaten.includes(sushi) && newMoney >= 0 ){
      this.setState({
        eaten: [...this.state.eaten, sushi],
        money: newMoney
      })
    }
  }

  addMoney = (event) => {
    event.preventDefault()
    let addedMoney = parseInt(event.currentTarget.children[0].value, 10)
    if(!addedMoney){addedMoney = 0}
    this.setState({
      money: this.state.money + addedMoney
    })
  }


  render() {
    return (
      <div className="app">
        {/* <form onSubmit={(e)=>this.addMoney(e)}>Add $ to Budget
          <input type="text" />
          <input type="submit" />
          </form> this kind of works but I hate it so no}*/}
        <SushiContainer eaten={this.state.eaten} eat={this.eatSushi} sushi={this.pickFourSushi()} more={this.moreSushi}/>
        <Table money={this.state.money} eaten={this.state.eaten}/>
      </div>
    );
  }
}

export default App;