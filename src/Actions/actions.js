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
const moveBookToCompleted = (item) => {
    return {
        type : 'MOVE_BOOK_TO_COMPLETED',
        payload : item
    }
}

export {
    changeBooksListViewType,
    selectItemId,
    changeViewListConfig
}