import React from 'react'

class MoreButton extends React.Component {
  clickHandler = () => {
    this.props.containerHandler()
  }
  
  render () {
    return (
      <button onClick={this.clickHandler}>
            More sushi!
      </button>
    )  
  }
}

export default MoreButton