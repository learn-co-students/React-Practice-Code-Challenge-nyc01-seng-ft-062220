import React from "react"

class MoneyForm extends React.Component{

    state = {
        amount: ''
    }

    onChangeHandler = (e) => {
        this.setState({
            amount: e.target.value
        })
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        this.props.addMoreMoneyHandler(this.state.amount)
        this.setState({
            amount: ''
        })
    }


    render() {
        return(
            <form onSubmit={this.onSubmitHandler}>
                <input type="text" name="amount" onChange={this.onChangeHandler} value={this.state.amount} placeholder="Add Money" />
                <input type="submit" />
            </form>
        )
    }
}

export default MoneyForm