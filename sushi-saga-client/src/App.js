import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis/"

class App extends Component {

  state = {
    sushi: [],
    page: 1,
    funds: 100
  
  }

  componentDidMount() {
    fetch(API + `?_page=${this.state.page}&_limit=4&`)
    .then(res => res.json())
    .then(res => {
      this.setState({
        sushi: res
      })
    })
  }

  moreSushi = (e) => {
    let newPage = this.state.page + 1

    fetch(API + `?_page=${newPage}&_limit=4&`)
    .then(res => res.json())
    .then(res => {
      this.setState({
        sushi: res,
        page: newPage
      })
    })
  }
  
  delHandler = (id) => {
    let sushi = this.state.sushi.filter(sushi => sushi.id === parseInt(id))[0]
    
    if (this.state.funds >= sushi.price) {

      let newArray = this.state.sushi.filter(sushi => sushi.id !== parseInt(id))
      
      this.setState({
        sushi: newArray,
        funds: this.state.funds - sushi.price
      })
    }
  }


  render() {
    return (
      <div className="app">
        <SushiContainer delHandler={this.delHandler} moreSushi={this.moreSushi} sushiArray={this.state.sushi}/>
        <Table funds={this.state.funds} />
      </div>
    );
  }
}

export default App;