import React, { Fragment } from 'react'

class Sushi extends React.Component {
  state = {
    eaten: false
  }

  eatSushi = () => {
    this.setState({
      eaten: this.props.appHandler(this.props.sushi.price)
    })
  }

  render() {
    return (
      <div className="sushi">
        <div className="plate" 
             onClick={this.eatSushi}>
          { 
            this.state.eaten ?
              null
            :
              <img src={this.props.sushi.img_url} width="100%" alt=""/>
          }
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }
}

export default Sushi