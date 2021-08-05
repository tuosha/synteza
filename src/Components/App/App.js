import React, {Component} from 'react'
import './App.css';
import HeaderPanel from "../HeaderPanel";
import SearchPanel from "../SearchPanel"
import ViewList from "../ViewList/view-list";
import {DataProvider} from "../../Services/ContextDataService";
import {SearchProvider} from "../../Services/ContextSearchService";
import {CustomViewProvider} from "../../Services/ContexCustomViewService";
import DataApi from "../../Services/DataApi";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Customization from "../Customization";
import {connect} from 'react-redux';

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
                                  <Route path="/books" render = {() => <ViewList/>} exact/>
                                  <Route path="/films" render = {() => <ViewList/>} exact/>
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
export default connect(mapStateToProps, null)(App);
