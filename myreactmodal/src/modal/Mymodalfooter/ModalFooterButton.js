import React from 'react'
export default class ModalFooterButton extends React.Component{
    render(){
        return(
            <button onClick={this.props.click} type="button" className={this.props.class} disabled={this.props.access} style={{width:"100px"}}>{this.props.title}</button>
        );
    }
}