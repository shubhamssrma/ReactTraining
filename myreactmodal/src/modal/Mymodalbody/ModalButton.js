import React from 'react'
export default class ModalButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            change:this.props.access,
        }
        this.handleAddButton = this.handleAddButton.bind(this);
        this.handleEditButton = this.handleEditButton.bind(this);
        this.handleSaveButton = this.handleSaveButton.bind(this);
        this.handleFindButton = this.handleFindButton.bind(this);
        this.handleDeleteButton = this.handleDeleteButton.bind(this);
        this.handleExitButton = this.handleExitButton.bind(this);

    }
    handleAddButton(){
        this.setState({
            change: !this.state.change
        })
        console.log(this.state.change)
        console.log("Add function call")
    }
    handleEditButton(){
        this.setState({
            change: !this.state.change
        })
        console.log(this.state.change)
        // console.log(this.props.access)
        console.log("Edit function call")
    }
    handleSaveButton(){
        this.setState({
            change: !this.state.change
        })
        console.log(this.state.change)
        // console.log(this.props.access)
        console.log("Save function call")
    }
    handleFindButton(){
        this.setState({
            change: !this.state.change
        })
        console.log(this.state.change)
        // console.log(this.props.access)
        console.log("Find function call")
    }
    handleDeleteButton(){
        this.setState({
            change: !this.state.change
        })
        console.log(this.state.change)
        // console.log(this.props.access)
        console.log("Delete function call")
    }
    handleExitButton(){
        this.setState({
            change: !this.state.change
        })
        console.log(this.state.change)
        // console.log(this.props.access)/
        console.log("Exit function call")
    }
    render(){
        return(
            <button onClick={()=>{
                if(this.props.title === "Add"){
                    this.handleAddButton();
                }else if(this.props.title === "Edit"){
                    this.handleEditButton();
                }else if(this.props.title === "Save"){
                    this.handleSaveButton();
                }else if(this.props.title === "Find"){
                    this.handleFindButton();
                }else if(this.props.title === "Delete"){
                    this.handleDeleteButton();
                }else if(this.props.title === "Exit"){
                    this.handleExitButton();
                }
            }} type="button" className={this.props.class} disabled={this.props.access} style={{width:"100%"}}>{this.props.title}</button>
        );
    }
}