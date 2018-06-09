import React from 'react';
import Question from './Question';
import Option from './Option';

export default class Card extends React.Component{
    render(props){
        return(
            <div>
                <Question question = {this.props.question}/>
                <Option
                    choices = {this.props.choices}
                />
                <button onClick = {this.props.onClick} >
                    Next
                    </button>
            </div>
        )
    }
}