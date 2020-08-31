import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis/"


class App extends Component {
  
  
  
  state = {
    sushiArray: [],
    page: 1,
    cash: 250,
    eaten: [] 
  }

  eat = (sushi) => {
    // console.log("EAT")
    // console.log(sushi)
    const newCash = this.state.cash - sushi.price

    if(!this.state.eaten.includes(sushi) && newCash >= 0){
      this.setState({
        eaten: [...this.state.eaten, sushi],
        cash: newCash 
      })
    }
  }
  
  componentDidMount() {
  
    fetch(API + `?_page=${this.state.page}&_limit=4`)
    .then(response => response.json())
    .then(sushi => {
      this.setState({sushiArray: sushi})
    })
  }

  nextPage = () => {
    let page = this.state.page +=1
    console.log('clicked')
    
    fetch(API + `?_page=${page}&_limit=4`)
    .then(response => response.json())
    .then(sushi => {
      this.setState({sushiArray: sushi,
      page: page})
    })
  }




  
  render() {
    return (
      <div className="app">
        <SushiContainer eat={this.eat} nextPage = {this.nextPage} sushiArray={this.state.sushiArray}/>
        <Table eaten ={this.state.eaten} cash={this.state.cash} />
      </div>
    );
  }
}

export default App;