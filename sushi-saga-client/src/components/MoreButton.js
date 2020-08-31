import React from 'react'

class MoreButton extends React.Component {
  
  clickHandler = (e) => {
    this.props.nextPage(e)
  }
  
  
  render() {

    return <button onClick={this.clickHandler}>
            More sushi!
          </button>
  }
}

export default MoreButton