import React, {Component} from 'react'
import {DataProvider} from "../../Services/ContextDataService";
import {SearchProvider} from "../../Services/ContextSearchService";
import {CustomViewProvider} from "../../Services/ContexCustomViewService";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {connect} from 'react-redux';
import {getDataFromServer} from "../../Actions/actions";
import DataApi from "../../Services/DataApi";
import HeaderPanel from "../HeaderPanel";
import SearchPanel from "../SearchPanel"
import BooksPage from "../BooksPage/BooksPage";
import Customization from "../Customization";
import './App.css';

class App extends Component {
    state = {
        searched : ''
    };
    dataApi = new DataApi();
    render() {
        const {booksListViewConfig} = this.props;
        return (
            <div className='app'>
                <DataProvider value = {this.dataApi}>
                    <SearchProvider value = {this.state.searched}>
                        <CustomViewProvider value = {booksListViewConfig}>
                            <Router>
                                <div className="navbar navbar-expand-lg navbar-light bg-light">
                                  <HeaderPanel/>
                                  <SearchPanel onSearchChange = {this.onSearchChange}/>
                                </div>
                                <Route path="/books" render = {() => <BooksPage/>} exact/>
                                <Route path="/films" render = {() => <BooksPage/>} exact/>
                                <Route path="/customization" render = {() => <Customization/>} exact/>
                            </Router>
                        </CustomViewProvider>
                    </SearchProvider>
                </DataProvider>
            </div>
        );
    }
    onSearchChange = (searched) => {
        this.setState(({searched : searched}))
    };
}
const mapStateToProps = ({listViewConfig : {booksListViewConfig}}) => {
    return {booksListViewConfig}
};
export default connect(mapStateToProps, {getDataFromServer})(App);
