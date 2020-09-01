import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:8000/sushis"

class App extends Component {

  state={
    money:100,
    sushis: [],
    fourSushis: []
  }

   clickHandler = () => { this.setState({
                                        fourSushis: this.state.sushis.splice(1,4)})

 }
  render(){
    return (
      <div className="app">
        <SushiContainer sushis = {this.state}
                        fourSushis = {this.state.fourSushis}
                        clickHandler = {this.clickHandler}/>
        <Table money = {this.state.money}/>
      </div>
    );
  }
  

  componentDidMount(){

    fetch(API)
  .then(response => response.json())
  .then(response => { this.setState({sushis: response,
                                    fourSushis: response.splice(1, 4)
                                    })  })
                                    
}
}
export default App;
                                   