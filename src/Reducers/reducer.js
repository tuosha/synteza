const initState = {
    booksListViewType : 'List',
    selectedItemId : 1,
    booksListViewConfig : {
        title: true,
        author : true,
        publicationDate : true,
        annotation : false,
    },
    completedBooks : []
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'CHANGE_BOOKS_LIST_VIEW_TYPE' :
            return {
                ...state,
                booksListViewType : action.payload
            };
        case 'SELECT_ITEM_ID' :
            return {
                ...state,
                selectedItemId : action.payload
            };
        case 'CHANGE_VIEW_LIST_CONFIG' :
            const {boxId, checked} = action.payload;
            return {
                ...state,
                booksListViewConfig : {
                    ...state.booksListViewConfig,
                    [boxId] : !checked
                }
            };
        case 'MOVE_BOOK_TO_COMPLETED' :
            return {
                ...state,
                
            };
        default:
            return state
    }
};

export default reducer