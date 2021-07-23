import React from 'react'
import withCustomView from "../../Decorators/withCustomView";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {changeViewListConfig} from "../../Actions/actions";

const Customization = ({booksViewConfig, onChangeViewListConfig})=> {
    const booksConfig = Object.entries(booksViewConfig);
    const onHandleChange = (e) => {
        const boxId = e.target.id;
        const checked = e.target.defaultChecked;
        onChangeViewListConfig({boxId, checked})
    };
    return (
        booksConfig.map(([key, val]) =>
            <div className="custom-control custom-checkbox" key={key}>
                <input type="checkbox" className="custom-control-input"
                       id={key}
                       defaultChecked={val}
                       onClick={onHandleChange}/>
                <label className="custom-control-label"
                       htmlFor={key}>{key[0].toUpperCase() + key.slice(1, key.length)}</label>
            </div>
        )
    )
};

const mapStateToProps = (state) => {
    return {
        booksViewConfig : state.booksListViewConfig
    }
};
const mapDispatchToPros = (dispatch) => {
    return {
        onChangeViewListConfig : bindActionCreators(changeViewListConfig, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToPros)(withCustomView(Customization))
