import React from 'react'

export default class ModalTextInputBox extends React.Component{
    
    render(){
        return(
            <input type={this.props.type} id={this.props.id} className={this.props.class} disabled={this.props.access}/>
        );
    }
}