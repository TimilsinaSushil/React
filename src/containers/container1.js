import  React, { Component} from 'react'
import  Component1 from '../functional/component1'

class Container1 extends  Component{

    constructor (props) {
        super(props)

        this.state= {
            stateprop1: "Our initial state",
            stateprop2: 5
        }
    }

    //Wrong way
    // changestate = () => (
    //     this.state.stateprop1 = "New State"
    // )

   // Correct way
    changeState = () => (
        this.setState((prevState, props) =>({
            stateprop2: prevState.stateprop2 +1
        })
    ))

    changeState2 = () => (
        this.setState({
            stateprop1: this.state.stateprop1 + "L"
        })
    )


    render() {
        return (
            <div>
                <button onClick={() => this.changeState()}>Change State</button>
                <button onClick={() => this.changeState2()}>Change State</button>
                <br/>
                <Component1 prop1={this.state.stateprop1}/>
                <br/>
                {this.state.stateprop2}
                <br/>
                {this.state.stateprop1}
            </div>
        )
    }

}


export default Container1;
