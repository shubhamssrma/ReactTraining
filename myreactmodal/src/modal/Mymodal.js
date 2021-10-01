import React from "react";
import {Modal , Button} from 'react-bootstrap'
// import Mymodalselectbody from "./Mymodalbody/Mymodalselectbody";
import MyModalBody from "./Mymodalbody/ModalBody";
import MyModalFooter from './Mymodalfooter/ModalFooter'
import './myModal.css'
import MyModalHeader from "./MymodalHeader/ModalHeader";

class Mymodal extends React.Component{
    constructor(){
        super();
        this.state = {
            show : false,
        }
    }

    handleClick(){
        this.setState({show: !this.state.show})
    }
    render(){
        return(
            <div>
                <Button onClick={()=>this.handleClick()}>Hello</Button>
                <Modal show={this.state.show} onHide={()=>this.handleClick()} id="modal-dialog">
                    <Modal.Header>
                        <MyModalHeader />
                    </Modal.Header>
                    <Modal.Body>
                        <MyModalBody />
                    </Modal.Body>
                    <Modal.Footer id="modal-footer">
                        <MyModalFooter />
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
export default Mymodal;