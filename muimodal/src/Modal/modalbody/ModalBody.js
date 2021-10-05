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
export default class MyModalBody extends React.Component {
    constructor() {
        super();
        this.state = {
            text: "text",
            checkbox: true,
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
            taxValue: ''
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
    setDisable(e) {
        this.setState({ value: !this.state.value })
        this.setState({ materialSelect: "" })
        this.setState({ partNameValue: '' })
        this.setState({ partNumberValue: '' })
        this.setState({ ppcNameValue: '' })
        this.setState({ descriptionValue: '' })
        this.setState({ allowBomValue: '', })
        this.setState({ unitValue: '', })
        this.setState({ stockValue: '' })
        this.setState({ consValue: '' })
        this.setState({ hsnValue: '' })
        this.setState({ taxValue: '' })
    }
    render() {
        return (
            <form>
                {/* Material Type Box 1 */}
                <div className="mb-3">
                    <div className="row">
                        <div className="col-md-2">
                            <InputLabel className="InputLabel">Material Type</InputLabel>
                        </div>
                        <div className="col-md-9">
                            <Select name="materialType" displayEmpty disabled={this.state.value} value={this.state.materialSelect} onChange={this.setmaterialSelect}>
                                <MenuItem value="" disabled>Select Material Type</MenuItem>
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
                            <TextField name="partName" color="secondary" value={this.state.partNameValue} onChange={this.setpartNameValue} disabled={this.state.value} />
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
                            <TextField name="partNumber" color="secondary" value={this.state.partNumberValue} disabled={this.state.value} onChange={this.setpartNumberValue} />
                        </div>
                        <div className="col-md-2">
                            <Checkbox id="allowBom" color="secondary" disabled={this.state.value} onChange={this.setallowBomValue} checked={this.state.allowBomValue}/>
                            <InputLabel style={{display:"inline-block"}} className="InputLabel">Allow Bom</InputLabel>
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
                            <TextField name="ppcName" color="secondary" value={this.state.ppcNameValue} disabled={this.state.value} onChange={this.setppcNameValue} />
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
                            <TextField name='description' color="secondary" disabled={this.state.value} value={this.state.descriptionValue} onChange={this.setdescriptionValue} />
                        </div>
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-3">
                                    <InputLabel className="InputLabel">Unit :</InputLabel>
                                </div>
                                <div className="col-md-9">
                                    <Select name='unit' displayEmpty disabled={this.state.value} value={this.state.unitValue} onChange={this.setunitValue}>
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
                            <TextField name='stockLocation' color="secondary" value={this.state.stockValue} disabled={this.state.value} onChange={this.setstockValue} />
                        </div>
                        <div className="col-md-2" id="label09">
                            <InputLabel className="InputLabel">Cons Unit :</InputLabel>
                        </div>
                        <div className="col-md-4">
                            <Select displayEmpty disabled={this.state.value} value={this.state.consValue} onChange={this.setconsValue}>
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
                            <TextField color="secondary" value={this.state.hsnValue} disabled={this.state.value} onChange={this.sethsnValue} />
                        </div>
                        <div className="col-md-2" id="label011">
                            <InputLabel className="InputLabel">Tax% :</InputLabel>
                        </div>
                        <div className="col-md-4">
                            <TextField color="secondary" disabled={this.state.value} value={this.state.taxValue} onChange={this.settaxValue} />
                        </div>
                    </div>
                </div>
                {/* Custom Buttons Box 10-11 */}
                <div className="mb-3">
                    <div className="row">
                        <div className="col-sm-2">
                            <button type="button" type="button" className="btn btn-primary" style={{ width: "100%" }} onClick={this.setDisable}>{this.state.value === true ? "Add" : "Remove"}</button>
                        </div>
                        <div className="col-sm-2">
                            <button type="button" className="btn btn-success" style={{ width: "100%" }} onClick={() => alert("You are able to edit this")}>Edit</button>
                        </div>
                        <div className="col-sm-2">
                            <button type="button" className="btn btn-success" disabled style={{ width: "100%" }}>Save</button>
                        </div>
                        <div className="col-sm-2">
                            <button type="button" className="btn btn-info" style={{ width: "100%" }}>Find</button>
                        </div>
                        <div className="col-sm-2">
                            <button type="button" className="btn btn-danger" style={{ width: "100%" }}>Delete</button>
                        </div>
                        <div className="col-sm-2">
                            <button type="button" className="btn btn-warning" style={{ width: "100%" }}>Exit</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}