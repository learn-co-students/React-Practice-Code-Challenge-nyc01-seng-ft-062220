import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from "../components/Sushi";

class SushiContainer extends React.Component {

    renderSushi = () => {
        return this.props.sushi.map(sushi => <Sushi key={sushi.id} sushi={sushi} onPlateClick={this.props.onPlateClick} moneyLeft={this.props.moneyLeft}/>)
    }

    render() {
        return (
            <Fragment>
                <div className="belt">
                    {this.renderSushi()}
                    <MoreButton onlyFour={this.props.onlyFour}/>
                </div>
            </Fragment>
        )
    }
}

export default SushiContainer