const changeBooksListViewType = (booksListViewType) => {
    return {
        type : 'CHANGE_BOOKS_LIST_VIEW_TYPE',
        payload : booksListViewType
    }
};
const selectItemId = (id=1) => {
    return {
        type : 'SELECT_ITEM_ID',
        payload : id
    }
};
const changeViewListConfig = (checkBox) => {
    return {
        type : 'CHANGE_VIEW_LIST_CONFIG',
        payload : checkBox
    }
};
const showCompletedBooks = (checkBox) => {
    return {
        type : 'SHOW_COMPLETED_BOOKS',
        payload : checkBox
    }
};
const changeBookStatus = (item) => {
    return {
        type : 'CHANGE_BOOK_STATUS',
        payload : item
    }
};
const booksRequested = () => {
    return {
        type : 'FETCH_BOOKS_REQUESTED'
    }
};
const booksLoaded = (data) => {
    return {
        type : 'FETCH_BOOKS_LOADED',
        payload : data
    }
};
const booksError = (error) => {
    return {
        type : 'FETCH_BOOKS_ERROR',
        payload : error
    }
};
const changeListItemsWidth = (listItemsWidth) => {
    return {
        type : 'CHANGE_LIST_ITEMS_WIDTH',
        payload: listItemsWidth
    }
};
const getDataFromServer = (dataApi) => () => (dispatch) => {
    dispatch(booksRequested());
    dataApi.getAllBooks()
        .then(data => dispatch(booksLoaded(data)))
        .catch(error => dispatch(booksError(error)))
};

export {
    changeBooksListViewType,
    selectItemId,
    changeViewListConfig,
    showCompletedBooks,
    changeBookStatus,
    getDataFromServer,
    changeListItemsWidth
}