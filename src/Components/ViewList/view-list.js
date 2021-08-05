import React from 'react';
import {BooksList, BooksTableList} from "../HOCHelpers/itemLists";
import BookDetails from "../HOCHelpers/itemDetails";
import {connect} from "react-redux";
import './view-list.css'

const ViewList = ({listViewType, completedBooks}) => {
    const showCompleted = completedBooks ?
        <div className='completed-books-list'>
            <h2>Completed books:</h2>
            <BooksList/>
        </div> : null;
    switch(listViewType) {
        case 'List' :
            return (
                <React.Fragment>
                    <div className='planned-books-list'>
                        <h2>Books in plans:</h2>
                        <BooksList/>
                    </div>
                        {showCompleted}
                </React.Fragment>
                );
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

const mapStateToProps = ( {listViewType : {booksListViewType}, listViewConfig : {showCompletedBooks} }) => {
    return  {
        listViewType : booksListViewType,
        completedBooks : showCompletedBooks
    }
};

export default connect(mapStateToProps, null)(ViewList)