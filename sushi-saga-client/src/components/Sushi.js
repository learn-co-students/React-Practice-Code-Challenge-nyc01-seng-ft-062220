import React from 'react'

const Sushi = (props) => {

  const clickHandler = () => {
    if (props.remainingBalance - props.sushi.price >= 0){
    props.sushi.new = false
    let newBlalance = props.remainingBalance - props.sushi.price
    props.handleEatenSushi(props, newBlalance)
    }
  }

  return (
    <div className="sushi">
      <div className="plate" 
           onClick={props.sushi.new === false ? null : clickHandler}>
        { props.sushi.new === false ? null : <img src={props.sushi.img_url} width="100%" alt={props.sushi.name} />}
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi