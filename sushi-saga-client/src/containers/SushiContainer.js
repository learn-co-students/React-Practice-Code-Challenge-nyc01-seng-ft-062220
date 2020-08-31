import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {
  state = {
    index: 0
  }
  
  renderSushi = () => this.props.sushiArray.map(sushi => <Sushi key={sushi.id} sushi={sushi} appHandler={this.props.appHandler}/>).slice(this.state.index, this.state.index + 4)

  containerHandler = () => {
    this.setState({
      index: this.state.index + 4
    }, () => console.log(`${this.state.index}/100`))
  }

  render() {
    return (
      <Fragment>
        <div className="belt">
          {this.renderSushi()}
          <MoreButton containerHandler={this.containerHandler}/>
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer