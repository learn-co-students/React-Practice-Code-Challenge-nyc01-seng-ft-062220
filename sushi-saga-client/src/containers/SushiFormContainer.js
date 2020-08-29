import React from "react"
import MoneyForm from "../components/MoneyForm";

class SushiFormContainer extends React.Component{

    render(){
        return(
            <MoneyForm addMoreMoneyHandler={this.props.addMoreMoneyHandler} />
        )
    }

}

export default SushiFormContainer