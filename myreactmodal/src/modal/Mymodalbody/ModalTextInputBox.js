import React from 'react'

export default class ModalTextInputBox extends React.Component{
    constructor(props){
        super(props);
        this.state={
            inputValue : ""
        }
    // if(!this.state.inputValue){
    //     //     this.setState({
    //     //         inputValue : null
    //     //     },() => {console.log("he")})
    //     // }
    // }
    this.changeValue = this.changeValue.bind(this)
    // this.setNull = this.setNull.bind(this)
    }
    changeValue = (e) => {
        this.setState({
            inputValue:e.target.value
        })
        
    }
    // setNull = (e) =>{
    //     this.setState({
    //         inputValue:""
    //     })
    //     return this.state.inputValue
    // }
    
    render(){
        return(
       

            <div>
                <input type={this.props.type} id={this.props.id} className={this.props.class}
                onChange={this.changeValue}
                disabled={this.props.access} autoComplete="off"/>
            </div>
        );
    }
}