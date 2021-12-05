import React from 'react';
import {BooksList, BooksTableList} from "../HOCHelpers/itemLists";
import BookDetails from "../HOCHelpers/itemDetails";
import {connect} from "react-redux";
import './view-list.css'
import AddItemToList from "../AddItemToList";

const ViewList = ({data, listViewType, showLists, optionsViewClasses}) => {
    const {showPlannedBooks, showCompletedBooks} = showLists;
    const itemPlanned = data.filter(item => !item.completed);
    const itemCompleted = data.filter(item => item.completed);
    const showAsListCompleted = showCompletedBooks ?
        <div className='completed-books-list'>
            <h2>Completed books:</h2>
            <BooksList data = {itemCompleted}/>
        </div> : null;
    const showAsListPlanned = showPlannedBooks ?
        <div className='planned-books-list'>
            <h2>Books in plans:</h2>
            <AddItemToList itemLabel='Add book'/>
            <BooksList data = {itemPlanned}/>
        </div> :
        <h3>Not books in planned list</h3>;
    const showAsTableCompleted = showCompletedBooks ?
        <div className='completed-books-table'>
            <h2>Completed books:</h2>
            <BooksTableList data = {itemCompleted}/>
        </div> : null;
    const showAsTablePlanned = showPlannedBooks ?
        <div className='completed-books-table'>
            <h2>Planned books:</h2>
            <BooksTableList data = {itemPlanned}/>
        </div> : null;
    switch(listViewType) {
        case 'SimpleList':
            return (
                <div className='simple-list' style={{'maxWidth' : optionsViewClasses}}>
                    {showAsListPlanned}
                    {showAsListCompleted}
                </div>
                );
        case 'ListWithDetails':
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
        case 'ListAsTable':
            return (
                <React.Fragment>
                    {showAsTablePlanned}
                    {showAsTableCompleted}
                </React.Fragment>
              );
        case 'ListAsTiles':
            return (
                <div className='list-as-tiles'>
                    <div className='list-as-tiles-planned'>
                        {showAsListPlanned}
                    </div>
                    <div className='list-as-tiles-completed'>
                        {showAsListCompleted}
                    </div>
                </div>
            );
        default:
            return <BooksList data={itemPlanned}/>
    }
};

const mapStateToProps = ({listViewType : {booksListViewType, showBooks, booksListItemsWidth}}) => {
    return  {
        listViewType: booksListViewType,
        showLists: showBooks,
        optionsViewClasses: booksListItemsWidth
    }
};

export default connect(mapStateToProps, null)(ViewList)