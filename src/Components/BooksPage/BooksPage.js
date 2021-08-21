import React, {Component} from 'react'
import ViewList from "../ViewList/view-list";
import Spinner from "../Spinner";
import {connect} from "react-redux";
import {getDataFromServer} from "../../Actions/actions";
import withContextDataFromStore from "../../Decorators/withContextDataFromStore";
import {bindActionCreators} from "redux";

class BooksPage extends Component{
    componentDidMount() {
        this.update()
    }

    update() {
        this.props.getBooks()
    }
    render() {
        const {data, loading, error} = this.props;
        if (loading) return <Spinner/>;
        if (error) return 'Something gonna wrong...';
        return (
            <ViewList data={data}/>
        )
    }
}

const mapStateToProps = ({ dataFromServer : {data, loading, error}}) => {
    return {data,loading,error}
};
const mapDispatchToProps = (dispatch, ownProps) => {
    const {dataApi} = ownProps;
    return {
        getBooks: bindActionCreators(getDataFromServer(dataApi), dispatch)
    }
};

export default withContextDataFromStore(connect(mapStateToProps, mapDispatchToProps)((BooksPage)))