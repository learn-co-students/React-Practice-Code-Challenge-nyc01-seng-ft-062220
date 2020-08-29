import React, { Fragment } from 'react'

class Sushi extends React.Component {

  state = {
    eaten : false
  }

  purchaseSushi = (event) => {
    this.props.sushiRollClickHandler(event)
  }

  eatSushi = () => {
    if (this.props.cannotPurchase !==  this.props.sushiRoll.id) {
      this.setState({eaten:true})
    }
  }

  checkIfPurchased = () => {
    if (this.props.purchased.find(id => { 
      return(
        id === this.props.sushiRoll.id
      ) 
    })) {
      return true
    } else {
      return false
    }
  }

  render() {

    return (
      <div className="sushi" >
        <div className="plate">
          { 
            this.checkIfPurchased() ? null :       <img 
                                                  src={this.props.sushiRoll.img_url} 
                                                  width="100%" id={this.props.sushiRoll.id} 
                                                  onClick={event => {this.purchaseSushi(event)}
                                                          } 
                                                />
          }
        </div>
        <h4 className="sushi-details">
          {this.props.sushiRoll.name} - ${this.props.sushiRoll.price}
        </h4>
      </div>
    )
  }
}

export default Sushi