import React from "react";
import {bindActionCreators} from "redux";
import {changeViewCompletedBooks} from "../../../Actions/actions";
import {connect} from "react-redux";

const ShowCompletedItems = ({showCompletedBooks, onChangeViewCompletedBooks}) => {
    return (
        <div>
            <h4>Show completed: </h4>
            <div className="form-check">
                <input type="checkbox"
                       className="form-check-input"
                       id="show-completed-items"
                       defaultChecked={showCompletedBooks}
                       onClick={onChangeViewCompletedBooks}/>
                <label className="form-check-label" htmlFor="show-completed-items">Click me</label>
            </div>
        </div>
    )
};

const mapStateToProps = ({listViewConfig : {showCompletedBooks}}) => {
    return {showCompletedBooks}
};
const mapDispatchToPros = (dispatch) => {
    return {
        onChangeViewCompletedBooks : bindActionCreators(changeViewCompletedBooks, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToPros)(ShowCompletedItems)