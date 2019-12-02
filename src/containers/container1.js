import React, {Component} from 'react'
import Component1 from '../functional/component1'
import * as ACTION_TYPES from '../store/actions/actions_types'
import * as ACTIONS from '../store/actions/actions'
import { connect } from 'react-redux';

class Container1 extends Component {



    render() {
        const user_text = "Text input by user"
        return (
            <div>
                <button onClick={() => console.log(this.props.stateprop1)}>Get State</button>
                <button onClick={() => console.log(this.props.input_text)}>Get User Text</button>
                <button onClick={() => this.props.action1()}>Dispatch Action 1</button>
                <button onClick={() => this.props.action2()}>Dispatch Action 2</button>
                <button onClick={() => this.props.action_creator1()}>Dispatch Action Creator 1</button>
                <button onClick={() => this.props.action_creator2()}>Dispatch Action Creator 2</button>
                <button onClick={() => this.props.action_creator3(user_text)}>Dispatch Action Creator 3</button>

                {
                    this.props.input_text?<h1>{this.props.input_text}</h1>: null
                }
            </div>
        )
    }

}


function mapStateToProps(state) {
return {
    stateprop1: state.reducer1.stateprop1,
    input_text: state.user_reducer.user_text
}
}


function mapDispatchToProps(dispatch) {
    return{
        action1: () => dispatch(ACTIONS.SUCCESS),
        action2: () => dispatch(ACTIONS.FAILURE),
        action_creator1: () => dispatch(ACTIONS.success()),
        action_creator2: () => dispatch(ACTIONS.failure()),
        action_creator3: (text) => dispatch(ACTIONS.user_input(text))
    }
}


export default  connect(mapStateToProps,mapDispatchToProps)(Container1);