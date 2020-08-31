import React from 'react'

export default class Sushi extends React.Component {
  
  
  
  render() {
    return (
      <div className="sushi">
        <div className="plate" 
             onClick={() => this.props.onClick ? this.props.onClick(this.props.sushiObj) : null}>
          {false ? null : <img alt="" src={this.props.sushiObj.img_url} width="100%" />}
        </div>
        <h4 className="sushi-details">
          {this.props.sushiObj.name} - ${this.props.sushiObj.price}
        </h4>
      </div>
    )
  } 
}

