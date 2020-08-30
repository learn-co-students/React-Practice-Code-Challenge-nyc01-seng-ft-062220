import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component{
    state = {
      i: 0
    }

  sushi = () => {
    let turnSushis = this.props.sushisArray.slice(this.state.i, this.state.i +4)
    return turnSushis.map(sushiObj => <Sushi key={sushiObj.id} sushi={sushiObj} handleEatenSushi={this.props.handleEatenSushi} remainingBalance={this.props.remainingBalance}/>)
  }

  buttonHandler = () => {
    this.state.i < this.props.sushisArray.length - 4 ? this.setState({i: this.state.i + 4}) : this.setState({i: 0})
  }

  render(){
    return (
      <Fragment>
        <div className="belt">
          { this.sushi() }
          <MoreButton buttonHandler={this.buttonHandler} />
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer