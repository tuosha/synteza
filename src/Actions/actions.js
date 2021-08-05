const changeBooksListViewType = (booksListViewType) => {
    return {
        type : 'CHANGE_BOOKS_LIST_VIEW_TYPE',
        payload : booksListViewType
    }
};
const selectItemId = (id = 1) => {
    return {
        type : 'SELECT_ITEM_ID',
        payload : id
    }
};
const changeViewListConfig = (item) => {
    return {
        type : 'CHANGE_VIEW_LIST_CONFIG',
        payload : item
    }
};
const changeViewCompletedBooks = () => {
    return {
        type : 'CHANGE_VIEW_COMPLETED_BOOKS',
    }
};
const changeBookStatus = (item) => {
    return {
        type : 'CHANGE_BOOK_STATUS',
        payload : item
    }
};

export {
    changeBooksListViewType,
    selectItemId,
    changeViewListConfig,
    changeViewCompletedBooks
}