import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {
  // state={
  //   fourSushis: this.props.sushis.sushis.splice(1, 4)
  // }

 

  render(){
   //console.log(this.state)
    // let fourSushis = this.props.sushis.sushis.splice(1, 4)
     let sushis = this.props.fourSushis.map((sushi) => <Fragment> <Sushi obj = {sushi}/> </Fragment>)
     //console.log(this.props.sushis.sushis)
  return (

    <Fragment>
      <div className="belt">
        
       { sushis} 
        <MoreButton clickHandler = {this.props.clickHandler}/>
      </div>
    </Fragment>
  )
  }

  
}

export default SushiContainer