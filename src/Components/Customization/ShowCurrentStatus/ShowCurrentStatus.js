import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import ShowCustomConfiguration from "../ShowCustomConfiguration";
import {createConfigList} from "../../../Utils";


const ShowCurrentStatus = ({showCompletedBooks, onChangeBooksStatusViewConfig}) => {
    return <ShowCustomConfiguration
        title='View configuration::'
        divClassName='items-view-custom'
        configItems={booksListViewConfig}
        createConfigFunction={createConfigList}
        onChangeConfig={onChangeViewListConfig}
        optionsClassNames={{div : 'items-view-configuration'}}
    />
};


const mapStateToProps = ({booksStatusViewConfig : {showCompletedBooks}}) => {
    return {showCompletedBooks}
};
const mapDispatchToPros = (dispatch) => {
    return {
        onChangeBooksStatusViewConfig : bindActionCreators(changeBooksStatusViewConfig , dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToPros)(ShowCurrentStatus)