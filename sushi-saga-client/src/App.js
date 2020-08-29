import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import SushiFormContainer from "./containers/SushiFormContainer";

// Endpoint!
const url = "http://localhost:3000/sushis/"

class App extends React.Component {

    state = {
        index: 0,
        sushi: [],
        onlyFour: [],
        money: 100,
        plates: []
    }

    onlyFour = () => {
        let firstFour = this.state.sushi.splice(this.state.index, this.state.index + 4)
        let newIndex = this.state.index + 4
        this.setState({
            onlyFour: firstFour,
            newIndex: newIndex
        })
    }

    onPlateClick = (obj) => {
        let totalPlates = [...this.state.plates, obj]
        if (this.state.money >= obj.price) {
            let newAmount = this.state.money - obj.price
            this.setState({
                money: newAmount,
                plates: totalPlates
            })
        }
    }

    addMoreMoneyHandler = (amount) => {
        let number = parseInt(amount, 10)
        let newAmount = this.state.money + number
        this.setState({
            money: newAmount
        })

    }

    componentDidMount() {
        let packet = {
            method: "GET",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            }
        }

        fetch(url, packet)
            .then(res => res.json())
            .then(sushi => this.setState({ sushi: sushi }))
    }

    render() {
        return (
            <div className="app">
                <SushiContainer sushi = {this.state.onlyFour} onPlateClick={this.onPlateClick} onlyFour={this.onlyFour} moneyLeft={this.state.money}/>
                <Table moneyLeft={this.state.money} plates={this.state.plates}/>
                <SushiFormContainer addMoreMoneyHandler={this.addMoreMoneyHandler}/>

            </div>
    );
  }
}

export default App;