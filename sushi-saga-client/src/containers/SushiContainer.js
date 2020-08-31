import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {
  
  state = {
    batch : 1
  }

  nextFourSushi = () => {
    let sliceStart = 0 + (this.state.batch * 4)
    let sliceEnd = 4 + (this.state.batch * 4)
    return this.props.sushiArray.slice(sliceStart, sliceEnd)
  }

  sushiObjectCreator = () => {
    return this.nextFourSushi().map(sushiObj => <Sushi sushiObject={sushiObj} deleteHandler={this.props.deleteHandler}/> )
  }

  moreButtonHelper = () => {
    this.setState({batch : this.state.batch + 1})
  }

  render() {
  return (
    <Fragment>
      <div className="belt">
        {this.sushiObjectCreator()}
        <MoreButton moreButtonHelper={this.moreButtonHelper} />
      </div>
    </Fragment>
  )

  }
}

export default SushiContainer