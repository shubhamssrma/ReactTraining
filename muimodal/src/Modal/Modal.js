import React from "react";
import {Modal , Button} from 'react-bootstrap'
// import Mymodalselectbody from "./Mymodalbody/Mymodalselectbody";
import MyModalBody from "./modalbody/ModalBody";
import MyModalFooter from './modalfooter/ModalFooter'
import './Modal.css'
import MyModalHeader from "./modalheader/ModalHeader"

class Mymodal extends React.Component{
    constructor(){
        super();
        this.state = {
            show : false,
        }
        this.sendShow = this.sendShow.bind(this)
    }

    handleClick(){
        this.setState({show: !this.state.show})
    }
    sendShow(e){
        this.setState({show: !e})
    }
    render(){
        return(
            <div>
                <Button onClick={()=>this.handleClick()}>Hello</Button>
                <Modal show={this.state.show} onHide={()=>this.handleClick()} id="modal-dialog" backdrop="static" keyboard={false}>
                    <Modal.Header>
                        <MyModalHeader />
                    </Modal.Header>
                    <Modal.Body>
                        <MyModalBody fun={this.sendShow} />
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