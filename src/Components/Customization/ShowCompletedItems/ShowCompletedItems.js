import React from "react";
import {bindActionCreators} from "redux";
import {showCompletedBooks} from "../../../Actions/actions";
import {connect} from "react-redux";
import './ShowCompletedItems.css'
import {createConfigList } from "../../../Utils";
import ShowCustomConfiguration from "../ShowCustomConfiguration";

const ShowCompletedItems = ({showBooks, onShowCompletedBooks}) => {
    return <ShowCustomConfiguration
        title='Completed books:'
        divClassName='show-completed-custom'
        configItems={showBooks}
        createConfigFunction={createConfigList}
        onChangeConfig={onShowCompletedBooks}
        optionsClassNames={{div : 'show-completed-items'}}
    />
};

const mapStateToProps = ({listViewType : {showBooks}}) => {
    return {showBooks}
};
const mapDispatchToPros = (dispatch) => {
    return {
        onShowCompletedBooks: bindActionCreators(showCompletedBooks, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToPros)(ShowCompletedItems)