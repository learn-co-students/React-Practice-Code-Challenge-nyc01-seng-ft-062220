import React, { Fragment } from 'react'

class Sushi extends  React.Component {
  render() {
   
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={/* Give me a callback! */ null}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          false ?
            null
          :
            <img src={this.props.obj.img_url } width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {this.props.obj.name} - ${this.props.obj.price}
      </h4>
    </div>
  )
      }
}

export default Sushi