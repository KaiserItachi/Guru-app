import React from 'react'

const Choice = function(props){
    

    return (
        <label>
        <input type = 'radio' value = {props.id}
        checked = {props.checked}
        onChange = {props.onChange}
        />
        {props.value}
        </label>
    )
}

export default Choice;