import React from 'react'
export default class ModalDarkButton extends React.Component{
    render(){
        return(
            <button type="button" onClick={()=>alert("Hello")} className={this.props.class}>...</button>
        );
    }
}