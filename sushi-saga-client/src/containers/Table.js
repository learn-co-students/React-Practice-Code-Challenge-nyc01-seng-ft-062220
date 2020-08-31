import React from 'react'

export default class Table extends React.Component {


  renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  
  render() {
    
    return (
      <React.Fragment>
        <h1 className="remaining">
          You have: ${this.props.wallet} remaining!
        </h1>
        <div className="table">
          <div className="stack">
            {this.renderPlates(this.props.array)}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

