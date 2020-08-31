import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component  {


  render() {
    

    let renderSushi = this.props.sushiArray.map((sushiObj) => <Sushi key={sushiObj.id} sushi={sushiObj} eat={this.props.eat} /> )


    return (
      <Fragment>
        <div className="belt">
          {renderSushi}
          <MoreButton nextPage={this.props.nextPage}/>
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer