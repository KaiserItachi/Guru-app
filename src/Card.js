import React from 'react';
import Question from './Question';
import Option from './Option';

export default class Card extends React.Component{
    render(){
        return(
            <div>
                <Question/>
                <Option/>
            </div>
        )
    }
}