const changeBooksListViewType = (state, action) => {
    if (state === undefined) {
        return {
            booksListViewType : 'List',
        }
    }
    switch (action.type) {
        case 'CHANGE_BOOKS_LIST_VIEW_TYPE':
            return {
                booksListViewType: action.payload
            };
        default : {
            return state.listViewType
        }
    }
};

export default changeBooksListViewType;
