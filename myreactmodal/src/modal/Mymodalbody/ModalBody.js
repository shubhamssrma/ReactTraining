import React from 'react'
import ModalLabel from './ModalLabel'
import ModalSelectList from './ModalSelectList'
import ModalTextInputBox from './ModalTextInputBox'
import ModalDarkButton from './ModalDarkButton'
import ModalCheckbox from './ModalCheckbox'
import '../myModal.css'
import ModalButton from './ModalButton'
// import {TextField} from '@material-ui/core'
// import Button from '@material-ui/core/Button'

export default class MyModalBody extends React.Component {
    constructor() {
        super();
        this.state = {
            text: "text",
            checkbox: "checkbox",
            value: true,
            partValue : ''
        }
        this.getValueFromChild = this.getValueFromChild.bind(this)
        // this.changeValues = this.changeValues.bind(this)
        // this.setNull = this.setNull.bind(this)
        // this.clearValues = this.clearValues.bind(this)
    }
    // changeValues(e){
    //     this.setState({
    //         partValue : e.target.value
    //     })
    //     console.log(this.state.partValue);
    //     // alert(this.state.partValue)
    // }
    // // onHandle(){
    //     this.setState({partValue:""})
    //     console.log(this.state.partValue);
    // }
    getValueFromChild(e) {
        this.setState({
            value: e,
        })
        
    }
    // clearValues = (e) =>{
    //     console.log('clearValues is called')
    //     this.setState({
    //         partValue : ""
    //     })
    //     console.log(this.state.partValue);
    // }
    // setNull(){
    //     this.setState({
    //         partValue : ""
    //     })
    // }
    render() {
        return (
            <form>
                {/* Material Type Box 1 */}
                <div className="mb-3">
                    <div className="row">
                        <div className="col-md-2">
                            <ModalLabel id="label1" label="Material Type:" />
                        </div>
                        <div className="col-md-9">
                            <ModalSelectList id="label1" class="form-select" materialType="Select Material Type" access={this.state.value} />
                        </div>
                        <div className="col-md-1">
                            <ModalDarkButton class="btn btn-dark" />
                        </div>
                    </div>
                </div>
                {/* Part Name Box 2 */}
                <div className="mb-3">
                    <div className="row">
                        <div className="col-md-2">
                            <ModalLabel id="label2" label="Part Name :" />
                        </div>
                        <div className="col-md-10">
                            {/* Material Ui TextField */}
                            {/* <TextField 
                                label = "Enter Part Name"
                                color= "secondary"
                                variant= "outlined"
                                onChange={this.changeValues}
                                value={this.state.partValue}
                            /> */}
                            {/* Material Ui TextField */}

                            <ModalTextInputBox id="label2" type={this.state.text} class="form-control" access={this.state.value}></ModalTextInputBox>
                            {/* <ModalTextInputBox id="label2" clear={this.clearValues} type={this.state.text} class="form-control" access={this.state.value}></ModalTextInputBox> */}
                            {/* {console.log(this.myVar[0])} */}
                        </div>
                    </div>
                </div>
                {/* Part Number & Allo Bom Box 3 */}
                <div className="mb-3">
                    <div className="row">
                        <div className="col-md-2">
                            <ModalLabel id="label3" label="Part No :" />
                        </div>
                        <div className="col-md-8">
                            <ModalTextInputBox id="label3" type={this.state.text} class="form-control" access={this.state.value} />
                        </div>
                        <div className="col-md-2">
                            <ModalCheckbox id="label4" />&nbsp;
                            <ModalLabel id="label4" label="Allow Bom" />
                        </div>
                    </div>
                </div>
                {/* PPC Name Box 4-5 */}
                <div className="mb-3">
                    <div className="row">
                        <div className="col-md-2">
                            <ModalLabel id="label5" label="PPC Name :" />
                        </div>
                        <div className="col-md-10">
                            <ModalTextInputBox id="label5" type={this.state.text} class="form-control" access={this.state.value} />
                        </div>
                    </div>
                </div>
                {/* Description & Unit Box 6-7 */}
                <div className="mb-3">
                    <div className="row">
                        <div className="col-md-2">
                            <ModalLabel id="label6" label="Description :" />
                        </div>
                        <div className="col-md-6">
                            <ModalTextInputBox id="label6" type={this.state.text} class="form-control" access={this.state.value} />
                        </div>
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-3">
                                    <ModalLabel id="label7" label="Unit :" />
                                </div>
                                <div className="col-md-9">
                                    <ModalSelectList id="label7" class="form-select" materialType="Select Unit" access={this.state.value} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Stock Location & Cons Unit Box 8-9 */}
                <div className="mb-3">
                    <div className="row">
                        <div className="col-md-2">
                            <ModalLabel id="label8" label="Stock Location :" />
                        </div>
                        <div className="col-md-4">
                            <ModalTextInputBox id="label8" type={this.state.text} class="form-control" access={this.state.value} />
                        </div>
                        <div className="col-md-2" id="label09">
                            <ModalLabel id="label9" label="Cons Unit :" />
                        </div>
                        <div className="col-md-4">
                            <ModalSelectList id="label9" class="form-select" materialType="Select Cons Unit" access={this.state.value} />
                        </div>
                    </div>
                </div>
                {/* HSN Code & Tax% Unit Box 8-9 */}
                <div className="mb-3">
                    <div className="row">
                        <div className="col-md-2">
                            <ModalLabel id="label10" label="HSN Code :" />
                        </div>
                        <div className="col-md-4">
                            <ModalTextInputBox id="label10" type={this.state.text} class="form-control" access={this.state.value} />
                        </div>
                        <div className="col-md-2" id="label011">
                            <ModalLabel id="label11" label="Tax% :" />
                        </div>
                        <div className="col-md-4">
                            <ModalTextInputBox id="label11" class="form-control" access={this.state.value} />
                        </div>
                    </div>
                </div>
                {/* Custom Buttons Box 10-11 */}
                <div className="mb-3">
                    <div className="row">
                        <div className="col-sm-2">

                            {/* Extra Button of Material Ui */}
                            {/* <Button
                            color= "secondary"
                            variant = "contained"
                                onClick={this.setNull}
                            >click</Button> */}
                            {/* Extra Button of Material Ui */}

                            <ModalButton class="btn btn-primary" title={this.state.value ? "Add" : "Remove"} passing={this.state.partValue} access={false} fun={this.getValueFromChild} ></ModalButton>
                        </div>
                        <div className="col-sm-2">
                            <ModalButton class="btn btn-success" title="Edit" access={false} />
                        </div>
                        <div className="col-sm-2">
                            <ModalButton class="btn btn-success" title="Save" access={true} />
                        </div>
                        <div className="col-sm-2">
                            <ModalButton class="btn btn-info" title="Find" access={false} />
                        </div>
                        <div className="col-sm-2">
                            <ModalButton class="btn btn-danger" title="Delete" access={false} />
                        </div>
                        <div className="col-sm-2">
                            <ModalButton class="btn btn-warning" title="Exit" access={false} />
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}