import React from "react";
import {bindActionCreators} from "redux";
import {changeViewListConfig} from "../../../Actions/actions";
import {connect} from "react-redux";

const ItemsViewConfiguration = ({booksListViewConfig, onChangeViewListConfig}) => {
    const booksConfig = Object.entries(booksListViewConfig);
    const onHandleChange = (e) => {
        const boxId = e.target.id;
        const checked = e.target.defaultChecked;
        onChangeViewListConfig({boxId, checked})
    };
    const configurationList = booksConfig.map(([key, val]) =>
        <div className="custom-control custom-checkbox" key={key}>
            <input type="checkbox" className="custom-control-input"
                   id={key}
                   defaultChecked={val}
                   onClick={onHandleChange}/>
            <label className="custom-control-label"
                   htmlFor={key}>{key[0].toUpperCase() + key.slice(1, key.length)}</label>
        </div>
    );
    return (
        <div className='configuration-list'>
            <h4>View configuration:</h4>
            {configurationList}
        </div>
    )
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