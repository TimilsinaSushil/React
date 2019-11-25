import React, {Component} from 'react'
import Component1 from '../functional/component1'

class Container1 extends Component {

    Arr1 = [
        {id:1, text:'text1', number:1},
        {id:2, text:'text2', number:2},
        {id:3, text:'text3',number:3},
        {id:4, text:'text4',number:4},
        {id:5, text:'text5',number:5},
    ]

    RenderListItem = (props) => (
        <div>
            {props.item.text}
            <p>{props.item.number}</p>

        </div>
    )

    render() {
        return (
            <div>
                {this.Arr1.map((item, index) => <this.RenderListItem key={item.id} item={item}/>)}
            </div>
        )
    }

}


export default Container1;