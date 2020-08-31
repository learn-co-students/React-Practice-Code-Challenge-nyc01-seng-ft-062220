import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => { 

  





  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map((sushi) => {
        return <Sushi key={sushi.id} name={sushi.name} img={sushi.img_url} price={sushi.price} eatingSushi={props.eatingSushi} eatenSushi={props.eatenSushi} sushi={sushi} />
        })
        
          /* 
             Render Sushi components here!
          */
        }
        <MoreButton moreSushi={props.moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer