import React from 'react'
import './item-list.css'
import {bindActionCreators} from "redux";
import {selectItemId} from "../../Actions/actions";
import {connect} from "react-redux";

const ItemList = ({ data, selectItem, config, children : itemInfo}) => {
    const list = data.map(item =>
        <li className='list-group-item'
            key={item.id}
            onClick={() => selectItem(item.id)}
        >
            {itemInfo(item, config)}
        </li>
    );
    return (
            <ul className='item-list list-group'>
                {list}
            </ul>
    )
};
const mapDispatchToProps = (dispatch) => {
    return {
        selectItem : bindActionCreators(selectItemId, dispatch)
    }
};

export default connect(null, mapDispatchToProps)(ItemList)

