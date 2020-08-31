import React from 'react'

const Sushi = (props) => {
  return (
    <div id={props.sushi.id} className="sushi">
      <div className="plate" 
          onClick={()=>props.eat(props.sushi)}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          props.taken ?
            null
          :
            <img alt = {props.sushi.name} src={props.sushi.img_url } width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi