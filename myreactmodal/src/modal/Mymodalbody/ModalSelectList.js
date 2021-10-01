import React from 'react'

export default class ModalSelectList extends React.Component {
    render() {
        return (
            <select name="" id={this.props.id} defaultValue={this.props.materialType} className={this.props.class} disabled={this.props.access} >
                <option disabled>{this.props.materialType}</option>
                <option value="">Hello</option>
            </select>
        );
    }
}