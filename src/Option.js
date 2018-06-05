import React from 'react'
import Choice from './Choice'

const Choices = [
    {id: "1", value: "Option 1"},
    {id: "2", value: "Option 2"}, 
    {id: "3", value: "Option 3"},
    {id: "4", value: "Option 4"}
]



class Option extends React.Component{
    constructor(){
        super()

        this.state = {
            selected: null
        }
    }

    onSelect = (e)=>{
        debugger;
        this.setState({
            selected : e.target.value
        })
    }

    render(){
        return(
            <div>
                {Choices.map((choice, i)=>{
                    return(
                        <Choice id = {choice.id} 
                        value = {choice.value}
                        checked = {this.state.selected === choice.id}
                        onChange = {this.onSelect}
                        key = {i}/>
                    )
                })}
                </div>
        )
    }
}

export default Option;