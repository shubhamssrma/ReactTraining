import React from 'react'
export default class ModalCheckbox extends React.Component{
    render(){
        return(
            <input type="checkbox" id={this.props.id}/>
        );
    }
}