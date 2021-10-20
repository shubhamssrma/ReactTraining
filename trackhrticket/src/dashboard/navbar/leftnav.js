import React from "react";
import {Link} from '@material-ui/core';
export default class Leftnav extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/demo" className="navbar-brand">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav navbar-right">
                            <li className="nav-item">
                                <Link to="/home" className="nav-link active">
                                    <i class="fa fa-circle-o" aria-hidden="true"></i>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/home" className="nav-link active">
                                    <i class="fa fa-comment" aria-hidden="true"></i>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/home" className="nav-link active">
                                    <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}