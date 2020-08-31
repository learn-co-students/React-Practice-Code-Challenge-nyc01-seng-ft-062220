import React from 'react'

class SushiForm extends React.Component{

    render(){
        return(
            <div className="form-container" onSubmit={e => this.props.submitHandler(e)}>
            <form>
                <h3>Add funds</h3>
                <input type="number" name="funds" placeholder="Add fund amount here" />   
                <button>Submit</button>
            </form>
            </div>
        )
    }

}


export default SushiForm