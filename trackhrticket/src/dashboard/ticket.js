import React, { Component } from 'react'
import Leftnav from './navbar/leftnav'
import Rightnav from './navbar/rightnav'
export class Ticket extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4" style={{padding:"0",borderRight:"1px dotted black"}}>
                        <Leftnav />
                    </div>
                    <div className="col-md-8" style={{padding:"0"}}>
                        <Rightnav />
                    </div>
                </div>
            </div>
        )
    }
}

export default Ticket
