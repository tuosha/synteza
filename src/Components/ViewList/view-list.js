import React from 'react';
import {BooksList, BooksTableList} from "../HOCHelpers/itemLists";
import BookDetails from "../HOCHelpers/itemDetails";
import {connect} from "react-redux";

const ViewList = ({booksListViewType}) => {
    switch(booksListViewType) {
        case 'List' :
            return <BooksList/>;
        case 'ListWithDetails' :
            return (
                <div className='detailed-list row'>
                    <div className='detailed-list left col'>
                        <BooksList/>
                    </div>
                    <div className='detailed-list right col'>
                        <BookDetails/>
                    </div>
                </div>
            );
        case 'ListAsTable' :
            return <BooksTableList/>;
        default:
            return <BooksList/>
    }
};

const mapStateToProps = (state) => {
    return {
        booksListViewType : state.booksListViewType,
    }
};

export default connect(mapStateToProps, null)(ViewList)