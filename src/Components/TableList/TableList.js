import React from "react";
import {bindActionCreators} from "redux";
import {changeBookStatus, selectItemId} from "../../Actions/actions";
import {connect} from "react-redux";

const TableList = ({ data, selectItem, changeStatus, config, children : itemInfo }) => {
    const tableHead = {
        id : 'Id',
        title : 'Title',
        author : 'Author',
        publicationDate : 'Year',
        annotation : 'Annotation',
        currentStatus : 'Status'
    };
    const tableHeadList = data.length ? itemInfo(tableHead, config, 'TH') : null;
    const tableBodyList = data.map(item =>
            <tr
                onClick={() => {
                    selectItem(item.id);
                    changeStatus(item)}
                }
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
        selectItem : bindActionCreators(selectItemId, dispatch),
        changeStatus : bindActionCreators(changeBookStatus, dispatch)
    }
};

export default connect(null, mapDispatchToProps)(TableList)