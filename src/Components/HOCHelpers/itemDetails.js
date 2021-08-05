import React from 'react';
import ItemDetails from "../ItemDetails";
import withContextData from "../../Decorators/withContextData";
import {connect} from "react-redux";
import {selectItemId} from "../../Actions/actions";

const BookDetails = (props) => {
    return(
        <ItemDetails {...props} >
            <Record field='title'/>
            <Record field='annotation'/>
        </ItemDetails>
    )
};

const mapDataToProps = (dataApi) => {
    return {
        getData : dataApi.getBook
    }
};

const Record = ({item, field, label }) => {
    return (
        <li className='list-group-item'>
            <span>{label}</span>
            <span>{item[field]}</span>
        </li>
    )
};
const mapStateToProps = (state) => {
    console.log(state.itemStatus.selectedItemId)
    return {
        selectedItem : state.itemStatus.selectedItemId,
    }
};

export default connect(mapStateToProps, null)(withContextData(mapDataToProps)(BookDetails))