import React, {useEffect} from 'react'
import ViewList from "../ViewList/view-list";
import Spinner from "../Spinner";
import {connect} from "react-redux";
import {getDataFromServer} from "../../Actions/actions";
import withContextDataFromStore from "../../Decorators/withContextDataFromStore";
import {bindActionCreators} from "redux";

const BooksPage = ({data, loading, error, getBooks}) => {
    useEffect(() => getBooks(), []);
    if (loading) return <Spinner/>;
    if (error) return 'Something gonna wrong...';
    return (
        <ViewList data={data}/>
    )
};

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