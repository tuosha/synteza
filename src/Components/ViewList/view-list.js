import React from 'react';
import {BooksListPlanned, BooksListCompleted, BooksTableList} from "../HOCHelpers/itemLists";
import BookDetails from "../HOCHelpers/itemDetails";
import {connect} from "react-redux";
import './view-list.css'

const ViewList = ({data, listViewType, showCompleted }) => {
    const itemPlanned = data.filter(item => !item.completed);
    const itemCompleted = data.filter(item => item.completed);
    const showAsListCompleted = showCompleted ?
        <div className='completed-books-list'>
            <h2>Completed books:</h2>
            <BooksListCompleted data = {itemCompleted}/>
        </div> : null;
    const showAsTableCompleted = showCompleted ?
        <div className='completed-books-table'>
            <h2>Completed books:</h2>
            <BooksTableList data = {itemCompleted}/>
        </div> : null;
    const showAsListPlanned = itemPlanned.length ?
        <div className='planned-books-list'>
            <h2>Books in plans:</h2>
            <BooksListPlanned data = {itemPlanned}/>
        </div> : <h3>Not books in planned list</h3>;
    switch(listViewType) {
        case 'List' :
            return (
                <React.Fragment>
                        {showAsListPlanned}
                        {showAsListCompleted}
                </React.Fragment>
                );
        case 'ListWithDetails' :
            return (
                <div className='detailed-list row'>
                    <div className='detailed-list left col'>
                        {showAsListPlanned}
                        {showAsListCompleted}
                    </div>
                    <div className='detailed-list right col'>
                        <BookDetails/>
                    </div>
                </div>
            );
        case 'ListAsTable' :
            return (
                <React.Fragment>
                    <h2>Books in plans:</h2>
                    <BooksTableList data={itemPlanned}/>;
                    {showAsTableCompleted}
                </React.Fragment>
              );
        default:
            return <BooksListCompleted data={itemCompleted}/>
    }
};

const mapStateToProps = ( {listViewType : {booksListViewType},
                          listViewConfig : {showCompletedBooks}
                          }) => {
    return  {
        listViewType : booksListViewType,
        showCompleted  : showCompletedBooks
    }
};

export default connect(mapStateToProps, null)(ViewList)