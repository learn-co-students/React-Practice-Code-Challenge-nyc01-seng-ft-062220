import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  let sushiArr = props.sushi.map(sushi => <Sushi taken={props.eaten.includes(sushi)} eat={props.eat} key={sushi.id} sushi={sushi}/>)

  return (
    <Fragment>
      <div className="belt">
        {
          sushiArr
        }
        <MoreButton more={props.more}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer