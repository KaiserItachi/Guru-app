import React from 'react'

const Choice = function(props){
    

    return (
        <div>
        <label>
        <input type = 'radio' value = {props.id}
            checked = {props.checked}
            onChange = {props.onChange}
            className = 'Option'/>
            {props.value}
        </label>
        <br/>
        <br/>
        </div>
    )
}

export default Choice;