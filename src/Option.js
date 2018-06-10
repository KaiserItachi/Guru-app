import React from 'react'
import Choice from './Choice';

 const Option =  function(props){
    return(
        <div>
            {props.choices.map((choice, i)=>{
                return(
                    <Choice id = {choice.id} 
                    value = {choice.value}
                    checked = {props.selected == choice.id}
                    onChange = {props.onSelect}
                    key = {i}/>
                )
            })}
            </div>
    )
}


export default Option;