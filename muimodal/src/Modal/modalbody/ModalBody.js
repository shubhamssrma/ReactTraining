import React from 'react'
// import ModalLabel from './ModalLabel'
// import ModalSelectList from './ModalSelectList'
// import ModalTextInputBox from './ModalTextInputBox'
// import ModalDarkButton from './ModalDarkButton'
// import ModalCheckbox from './ModalCheckbox'
// import '../myModal.css'
// import ModalButton from './ModalButton'
import './ModalBody.css'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import Checkbox from '@material-ui/core/Checkbox'
import MenuItem from '@material-ui/core/MenuItem'
import { Modal } from 'react-bootstrap'
import axios from 'axios'
// import axios from 'axios'
export default class MyModalBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "text",
            // checkbox: true,
            value: true,
            materialSelect: '',
            partNameValue: '',
            partNumberValue: '',
            ppcNameValue: '',
            descriptionValue: '',
            allowBomValue: false,
            unitValue: '',
            stockValue: '',
            consValue: '',
            hsnValue: '',
            taxValue: '',
            // data : []
            exitShow: true,
            showNestedModal: false,
            responseData:[]
        }
        this.setDisable = this.setDisable.bind(this)
        this.setmaterialSelect = this.setmaterialSelect.bind(this)
        this.setpartNameValue = this.setpartNameValue.bind(this)
        this.setpartNumberValue = this.setpartNumberValue.bind(this)
        this.setppcNameValue = this.setppcNameValue.bind(this)
        this.setdescriptionValue = this.setdescriptionValue.bind(this)
        this.setallowBomValue = this.setallowBomValue.bind(this)
        this.setunitValue = this.setunitValue.bind(this)
        this.setstockValue = this.setstockValue.bind(this)
        this.setconsValue = this.setconsValue.bind(this)
        this.sethsnValue = this.sethsnValue.bind(this)
        this.settaxValue = this.settaxValue.bind(this)
        this.handleExit = this.handleExit.bind(this)
        this.nestedModal = this.nestedModal.bind(this)
        this.submitData = this.submitData.bind(this)
    }
    nestedModal() {
        this.setState({ showNestedModal: !this.state.showNestedModal })
    }
    setmaterialSelect(e) {
        this.setState({ materialSelect: e.target.value })
    }
    setpartNameValue(e) {
        this.setState({ partNameValue: e.target.value })
    }
    setpartNumberValue(e) {
        this.setState({ partNumberValue: e.target.value })
    }
    setppcNameValue(e) {
        this.setState({ ppcNameValue: e.target.value })
    }
    setdescriptionValue(e) {
        this.setState({ descriptionValue: e.target.value })
    }
    setallowBomValue(e) {
        this.setState({ allowBomValue: !this.state.allowBomValue })
    }
    setunitValue(e) {
        this.setState({ unitValue: e.target.value })
    }
    setstockValue(e) {
        this.setState({ stockValue: e.target.value })
    }
    setconsValue(e) {
        this.setState({ consValue: e.target.value })
    }
    sethsnValue(e) {
        this.setState({ hsnValue: e.target.value })
    }
    settaxValue(e) {
        this.setState({ taxValue: e.target.value })
    }
    handleExit(e) {
        this.setState({ exitShow: !this.state.exitShow })
        this.props.fun(this.state.exitShow)
    }
    setDisable(e) {
        this.setState({ value: !this.state.value })
        this.setState({ materialSelect: "" })
        this.setState({ partNameValue: '' })
        this.setState({ partNumberValue: '' })
        this.setState({ ppcNameValue: '' })
        this.setState({ descriptionValue: '' })
        this.setState({ allowBomValue: false, })
        this.setState({ unitValue: '', })
        this.setState({ stockValue: '' })
        this.setState({ consValue: '' })
        this.setState({ hsnValue: '' })
        this.setState({ taxValue: '' })
    }

    submitData(){
        var url = "http://localhost/DBMSSQL/FetchRsData.php";
        var Query = "INSERT INTO test_table2(partname,part_no,ppc_name)VALUES('"+this.state.partNameValue+"','"+this.state.partNumberValue+"','"+this.state.ppcNameValue+"')";
        var formData = new FormData();
        // formData.append("partName",this.state.partNameValue);
        // formData.append("partNo",this.state.partNumberValue);
        // formData.append("ppcName",this.state.ppcNameValue);
        formData.append("Query",Query);
        axios({
            method: 'post',
            headers: {  "Content-Type": "multipart/form-data" },
            url: url,
            data:formData
        }).then(resp => console.log(resp.data))
        .catch(err => console.error(err))

        this.setState({partNameValue:"",partNumberValue:'',ppcNameValue:''})
    }
    render() {
    return (
        <>
            <Modal style={{ backgroundColor: 'rgba(0,0,0,0.6)' }} show={this.state.showNestedModal} onHide={() => this.nestedModal()}>
                <Modal.Header>Heading</Modal.Header>
                <Modal.Body>Body</Modal.Body>
                <Modal.Footer>Footer</Modal.Footer>
            </Modal>
            <form>
                {/* Material Type Box 1 */}
                <div className="mb-3">
                    <div className="row">
                        <div className="col-md-2">
                            <InputLabel className="InputLabel">Material Type</InputLabel>
                        </div>
                        <div className="col-md-9">
                            <Select name="materialType" color="secondary" displayEmpty disabled={this.state.value} value={this.state.materialSelect} onChange={this.setmaterialSelect}>
                                <MenuItem value="" disabled>Select Material Type</MenuItem>
                                {/* {this.props.data.map((type,index) => <MenuItem key={index} value={type}>{type}</MenuItem>)} */}
                                <MenuItem value={1}>Choose 1</MenuItem>
                                <MenuItem value={2}>Choose 2</MenuItem>
                                <MenuItem value={3}>Choose 3</MenuItem>
                            </Select>
                        </div>
                        <div className="col-md-1">
                            <button type="button" className='btn btn-dark' onClick={() => alert("click is done")}>...</button>
                        </div>
                    </div>
                </div>
                {/* Part Name Box 2 */}
                <div className="mb-3">
                    <div className="row">
                        <div className="col-md-2">
                            <InputLabel className="InputLabel">Part Name :</InputLabel>
                        </div>
                        <div className="col-md-10">
                            <TextField name="partName" autoComplete="off" color="secondary" value={this.state.partNameValue} onChange={this.setpartNameValue} disabled={this.state.value} />
                        </div>
                    </div>
                </div>
                {/* Part Number & Allo Bom Box 3 */}
                <div className="mb-3">
                    <div className="row">
                        <div className="col-md-2">
                            <InputLabel className="InputLabel">Part No :</InputLabel>
                        </div>
                        <div className="col-md-8">
                            <TextField name="partNumber" autoComplete="off" color="secondary" value={this.state.partNumberValue} disabled={this.state.value} onChange={this.setpartNumberValue} />
                        </div>
                        <div className="col-md-2">
                            <Checkbox id="allowBom" color="secondary" disabled={this.state.value} onChange={this.setallowBomValue} checked={this.state.allowBomValue} />
                            <InputLabel style={{ display: "inline-block" }} className="InputLabel">Allow Bom</InputLabel>
                        </div>
                    </div>
                </div>
                {/* PPC Name Box 4-5 */}
                <div className="mb-3">
                    <div className="row">
                        <div className="col-md-2">
                            <InputLabel className="InputLabel">PPC Name :</InputLabel>
                        </div>
                        <div className="col-md-10">
                            <TextField name="ppcName" autoComplete="off" color="secondary" value={this.state.ppcNameValue} disabled={this.state.value} onChange={this.setppcNameValue} />
                        </div>
                    </div>
                </div>
                {/* Description & Unit Box 6-7 */}
                <div className="mb-3">
                    <div className="row">
                        <div className="col-md-2">
                            <InputLabel className="InputLabel">Description :</InputLabel>
                        </div>
                        <div className="col-md-6">
                            <TextField name='description' autoComplete="off" color="secondary" disabled={this.state.value} value={this.state.descriptionValue} onChange={this.setdescriptionValue} />
                        </div>
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-3">
                                    <InputLabel className="InputLabel">Unit :</InputLabel>
                                </div>
                                <div className="col-md-9">
                                    <Select name='unit' color="secondary" displayEmpty disabled={this.state.value} value={this.state.unitValue} onChange={this.setunitValue}>
                                        <MenuItem value="" disabled>Select Unit</MenuItem>
                                        <MenuItem value={1}>Hello world</MenuItem>
                                    </Select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Stock Location & Cons Unit Box 8-9 */}
                <div className="mb-3">
                    <div className="row">
                        <div className="col-md-2">
                            <InputLabel className="InputLabel">Stock Location :</InputLabel>
                        </div>
                        <div className="col-md-4">
                            <TextField name='stockLocation' autoComplete="off" color="secondary" value={this.state.stockValue} disabled={this.state.value} onChange={this.setstockValue} />
                        </div>
                        <div className="col-md-2" id="label09">
                            <InputLabel className="InputLabel">Cons Unit :</InputLabel>
                        </div>
                        <div className="col-md-4">
                            <Select color="secondary" displayEmpty disabled={this.state.value} value={this.state.consValue} onChange={this.setconsValue}>
                                <MenuItem value="" disabled>Select Cons Unit</MenuItem>
                                <MenuItem value={1}>Hello world</MenuItem>
                            </Select>
                        </div>
                    </div>
                </div>
                {/* HSN Code & Tax% Unit Box 8-9 */}
                <div className="mb-3">
                    <div className="row">
                        <div className="col-md-2">
                            <InputLabel className="InputLabel">HSN Code :</InputLabel>
                        </div>
                        <div className="col-md-4">
                            <TextField color="secondary" autoComplete="off" value={this.state.hsnValue} disabled={this.state.value} onChange={this.sethsnValue} />
                        </div>
                        <div className="col-md-2" id="label011">
                            <InputLabel className="InputLabel">Tax% :</InputLabel>
                        </div>
                        <div className="col-md-4">
                            <TextField color="secondary" autoComplete="off" disabled={this.state.value} value={this.state.taxValue} onChange={this.settaxValue} />
                        </div>
                    </div>
                </div>
                {/* Custom Buttons Box 10-11 */}
                <div className="mb-3">
                    <div className="row">
                        <div className="col-sm-2">
                            <button type="button" className="btn btn-primary" style={{ width: "100%" }} onClick={this.setDisable}>{this.state.value === true ? "Add" : "Remove"}</button>
                        </div>
                        <div className="col-sm-2">
                            <button type="button" className="btn btn-success" style={{ width: "100%" }} onClick={() => alert("You are able to edit this")}>Edit</button>
                        </div>
                        <div className="col-sm-2">
                            <button type="button" className="btn btn-success" disabled={this.state.value} onClick={this.submitData} style={{ width: "100%" }}>Save</button>
                        </div>
                        <div className="col-sm-2">
                            <button type="button" className="btn btn-info" style={{ width: "100%" }} onClick={this.nestedModal}>Find</button>
                        </div>
                        <div className="col-sm-2">
                            <button type="button" className="btn btn-danger" style={{ width: "100%" }}>Delete</button>
                        </div>
                        <div className="col-sm-2">
                            <button type="button" className="btn btn-warning" style={{ width: "100%" }} onClick={this.handleExit}>Exit</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}
}