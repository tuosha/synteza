import React from "react";
import {bindActionCreators} from "redux";
import {changeViewListConfig} from "../../../Actions/actions";
import {connect} from "react-redux";
import './ItemsViewConfiguration.css'
import {createConfigList } from "../../../Utils";
import ShowCustomConfiguration from "../ShowCustomConfiguration";

const ItemsViewConfiguration = ({booksListViewConfig, onChangeViewListConfig}) => {
    return <ShowCustomConfiguration
        title='View configuration:'
        divClassName='items-view-custom'
        configItems={booksListViewConfig}
        createConfigFunction={createConfigList}
        onChangeConfig={onChangeViewListConfig}
        optionsClassNames={{div : 'items-view-configuration'}}
    />
};

const mapStateToProps = ( {listViewConfig : {booksListViewConfig}} ) => {
    return {booksListViewConfig}
};
const mapDispatchToPros = (dispatch) => {
    return {
        onChangeViewListConfig : bindActionCreators(changeViewListConfig, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToPros)(ItemsViewConfiguration)