import React from 'react'

export default class ModalLabel extends React.Component{
    render(){
        return(
            <label style={{paddingTop:"6px",fontWeight:"bold"}} htmlFor={this.props.id} className="form-label">{this.props.label}</label>
        );
    }
}