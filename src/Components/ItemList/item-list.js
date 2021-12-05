import React from 'react'
import {bindActionCreators} from "redux";
import {selectItemId, changeBookStatus} from "../../Actions/actions";
import {connect} from "react-redux";
import './item-list.css'

const ItemList = ({ data, selectItem, changeStatus, config, optionsViewClasses, children : itemInfo}) => {
    const list = data.map(item =>
        <li style = {{ backgroundColor: item.statusColor }}
            className='list-group-item'
            key={item.id}
            onClick={() => selectItem(item.id)}
            onDoubleClick={() => changeStatus(item)}
        >
            {itemInfo(item, config)}
        </li>
    );
    return (
            <ul className='list-group item-list'>
                {list}
            </ul>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectItem : bindActionCreators(selectItemId, dispatch),
        changeStatus : bindActionCreators(changeBookStatus, dispatch)
    }
};

export default connect(null, mapDispatchToProps)(ItemList)

