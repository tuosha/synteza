import React from 'react'
import {bindActionCreators} from "redux";
import {selectItemId, changeBookStatus} from "../../Actions/actions";
import {connect} from "react-redux";
import './item-list.css'

const ItemList = ({ data, selectItem, changeStatus, config, children : itemInfo}) => {
    const list = data.map(item =>
        <li className='list-group-item'
            key={item.id}
            onClick={() => { selectItem(item.id); changeStatus(item)} }
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
        selectItem : bindActionCreators(selectItemId, dispatch),
        changeStatus : bindActionCreators(changeBookStatus, dispatch)
    }
};

export default connect(null, mapDispatchToProps)(ItemList)

