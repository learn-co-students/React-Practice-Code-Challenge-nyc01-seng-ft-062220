import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => {props.deleteHandler(props.sushiObject)}}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          false ?
            null
          :
            <img src={props.sushiObject.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushiObject.name} - ${props.sushiObject.price}
      </h4>
    </div>
  )
}

export default Sushi