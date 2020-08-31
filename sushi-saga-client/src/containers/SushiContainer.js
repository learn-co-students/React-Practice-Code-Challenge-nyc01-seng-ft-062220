import React from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'



export default class SushiContainer extends React.Component {
  
state = {
  start: 0
}
  
  renderSushi = () => {
    let firstFour = this.props.sushi.slice(this.state.start, this.state.start+4)
   return firstFour.map(sushi => <Sushi key={sushi.id} id={sushi.id} sushiObj={sushi} onClick={this.props.onClick} />)
  }

  nextFour = () => {
    this.setState({ 
      start: this.state.start + 4})
  }

  render() {
    return (
      <React.Fragment>
        <div className="belt">
          {this.renderSushi()}
          <MoreButton moreButton={this.nextFour}/>
        </div>
      </React.Fragment>
    )
  }
}
