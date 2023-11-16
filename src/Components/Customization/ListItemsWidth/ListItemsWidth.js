import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {changeListItemsWidth} from "../../../Actions/actions";
import './ListItemsWidth.css'

const ListItemsWidth = ({width, onChangeListItemsWidth}) => {
    const onHandleClick = (e) => onChangeListItemsWidth(e.target.name);
    const scales = ['33%','50%','66%','75%','100%'];
    const buttons = scales.map(item => {
        const active = width === item ? 'active': '';
        return (
        <label className={`btn btn-outline-primary ${active}`} key={item}>
            <input type="radio"
               name={item}
               autoComplete="off"
               onClick={onHandleClick}
               defaultChecked={width === item}
            />{item}
        </label> )}
    );
    return (
        <div className='list-items-width'>
            <h4>Change Items Width:</h4>
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                {buttons}
            </div>
        </div>
    )
};

const mapStateToProps = ({listViewType : {booksListItemsWidth} }) => {
    return {
        width : booksListItemsWidth
    }
};

const mapDispatchToProps = (dispatch) => {
    return  {
        onChangeListItemsWidth : bindActionCreators(changeListItemsWidth, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItemsWidth)