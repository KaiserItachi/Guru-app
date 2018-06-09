import React from 'react';
import Question from './Question';
import Option from './Option';

export default class Card extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            selected: null
        }
    }

    onSelect = (e) => {
        this.setState({
            selected: e.target.value
        })
    }

    onNext = ()=>{
        if(this.state.selected){
            this.props.onClick();
        }
        else{
            alert('Please select an option')
        }
    }

    render(props){
        return(
            <div>
                <Question question = {this.props.question}/>
                <Option
                    choices = {this.props.choices}
                    onSelect = {this.onSelect}
                    selected = {this.state.selected}
                />
                <button onClick = {this.onNext} >
                    Next
                    </button>
            </div>
        )
    }
}