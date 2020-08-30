import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {
  render(){
    return (
      <Fragment>
        <div className="belt">
          {
            this.props.sushis.map((sushi => {
                return <Sushi sushi={sushi} key={sushi.id} eatSushi={this.props.eatSushi} taken={this.props.eaten.includes(sushi)}/>
            }))
          }
          <MoreButton moreSushi={this.props.moreSushi}/>
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer