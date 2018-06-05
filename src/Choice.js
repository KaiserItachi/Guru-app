import React from 'react'

const Choice = function(props){
    return (
        <label>
        <input type = 'radio' value = {props.id}/>
        {props.value}
        </label>
    )
}

export default Choice;