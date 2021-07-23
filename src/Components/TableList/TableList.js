import React from "react";
import {bindActionCreators} from "redux";
import {selectItemId} from "../../Actions/actions";
import {connect} from "react-redux";

const TableList = ({ data, selectItem, config, children : itemInfo }) => {
    const tableHead = {
        id : 'Id',
        title : 'Title',
        author : 'Author',
        publicationDate : 'Year',
        annotation : 'Annotation'
    };
    const tableHeadList = data.length ? itemInfo(tableHead, config, 'TH') : null;
    const tableBodyList = data.map(item =>
            <tr
                onClick={() => selectItem(item.id)}
                key={item.id}
            >
                {itemInfo(item, config, 'TD')}
            </tr>
    );
    return (
        <table className='table table-hover'>
            <thead className='thead-dark'>
                {tableHeadList}
            </thead>
            <tbody>
                {tableBodyList}
            </tbody>
        </table>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectItem : bindActionCreators(selectItemId, dispatch)
    }
};

export default connect(null, mapDispatchToProps)(TableList)