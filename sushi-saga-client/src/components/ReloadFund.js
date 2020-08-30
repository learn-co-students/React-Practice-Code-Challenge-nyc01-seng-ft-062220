import React from 'react'

class ReloadFund extends React.Component{
    state = {
        funding: ""
    }

    inputHandler = (e) => {
        this.setState({funding: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.reloadHandler(this.state.funding)
    }

    render(){
        return(
            <form onSubmit={this.submitHandler}>
                <input type="number" min="0" value={this.state.funding} onChange={this.inputHandler} ></input><br></br>
                <button type="submit"> Reload Fund!</button>
            </form>
        )
    }
}

export default ReloadFund