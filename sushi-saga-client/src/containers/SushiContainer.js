import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  state = {currentRollCount: 4}

  mapSushiRolls = () => {
    const filteredArray = (this.props.sushiRolls.filter(sushiRoll => {
      return (sushiRoll.id <= this.state.currentRollCount && sushiRoll.id > this.state.currentRollCount - 4)
    }))

    return (filteredArray.map(sushiRoll => {
      return (<Sushi 
                key={sushiRoll.id} 
                sushiRollClickHandler={this.props.sushiRollClickHandler} 
                sushiRoll={sushiRoll}
                purchased={this.props.purchased}
              />)
    })
    )
  }

  updateRollCounter = () => {
      this.setState({currentRollCount : this.state.currentRollCount + 4})
  }

  render () {
    return (
      <Fragment>
        <div className="belt">
          {this.mapSushiRolls()}
          <MoreButton updateRollCounter={this.updateRollCounter}/>
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer