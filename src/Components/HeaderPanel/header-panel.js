import React from 'react';
import {Link} from "react-router-dom";
import './header-panel.css'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import {changeBooksListViewType} from "../../Actions/actions";

const HeaderPanel = ({changeViewType}) => {
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/books">Books</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/films">Films</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                View Type
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/#" onClick={(e) => {e.preventDefault(); changeViewType('List')}}>View as List</a>
                                <a className="dropdown-item" href="/#" onClick={(e) => {e.preventDefault(); changeViewType('ListWithDetails')}}>View with Details</a>
                                <a className="dropdown-item" href="/#" onClick={(e) => {e.preventDefault(); changeViewType('ListAsTable')}}>View as Table</a>
                                <a className="dropdown-item" href="/#" onClick={(e) => {e.preventDefault(); changeViewType('ListAsTile')}}>View as Tile</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/customization">Customization</Link>
                        </li>
                    </ul>
                </div>
            </nav>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeViewType : bindActionCreators(changeBooksListViewType, dispatch)
    }
};

export default connect(null, mapDispatchToProps)(HeaderPanel)