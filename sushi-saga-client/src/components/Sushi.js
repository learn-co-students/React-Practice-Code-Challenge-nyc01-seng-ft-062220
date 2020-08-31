import React, { Fragment } from 'react'

class Sushi extends React.Component {

  // clickHandler = () => {
  //   this.props.eat(this.props.sushi)

  // }
  render() {

    return (
      <div className="sushi">
        <div className="plate" 
             onClick={()=> this.props.eat(this.props.sushi)}>
          { 
            this.props.taken ? 
            
              null
            :
              <img alt ="sushi" src={this.props.sushi.image_url}width="100%" />
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