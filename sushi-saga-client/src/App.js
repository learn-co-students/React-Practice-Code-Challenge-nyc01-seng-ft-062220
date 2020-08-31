import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

//going to move on to other labs but next steps would be:
/*


*/

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushiArray : [],
    deletedSushi: []
  }

  componentDidMount() {
    fetch(API)
    .then(response => response.json())
    .then(sushiData => this.setState({sushiArray: sushiData}))
  }

  deleteHandler = (sushiObj) => {
    let sushiArrayCopy = [...this.state.sushiArray]
    let newSushiArray = sushiArrayCopy.filter(sushiObject => sushiObject.id !== sushiObj.id)
    
    let sushiToDelete = sushiArrayCopy.find(sushiObject => sushiObject.id === sushiObj.id)

    let newDeletedSushi = [...this.state.deletedSushi, sushiToDelete]
    
    this.setState({
      sushiArray : newSushiArray,
      deletedSushi: newDeletedSushi
    })
    
  }

  render() {
    return (
      <div className="app">
        <SushiContainer deleteHandler={this.deleteHandler} sushiArray={this.state.sushiArray} />
        <Table deletedSushi={this.state.deletedSushi}/>
      </div>
    );
  }
}

export default App;