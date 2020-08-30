import React, { Fragment } from 'react'

const Sushi = (props) => {
  
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={(e) => props.delHandler(e.target.dataset.setId)}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          false ?
            null
          :
            <img data-set-id={parseInt(props.sushiObj.id)} src={props.sushiObj.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushiObj.name} - ${props.sushiObj.price}
      </h4>
    </div>
  )
}

export default Sushi