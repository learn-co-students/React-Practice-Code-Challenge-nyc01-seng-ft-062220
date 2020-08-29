import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = () => {
    return (
      props.plateStack.map((x, index) => {
        return <div key={index} className="empty-plate" style={{ top: -7 * index }}/>
      })
    )
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.budget} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {renderPlates()}
        </div>
      </div>
    </Fragment>
  )
}

export default Table