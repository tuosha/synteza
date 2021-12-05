const changeBooksListViewType = (state, action) => {
    if (state === undefined) {
        return {
            booksListViewType : 'SimpleList',
            showBooks : {
                showPlannedBooks : true,
                showCompletedBooks : true
            },
            booksListItemsWidth : '100%'
        }
    }
    switch (action.type) {
        case 'CHANGE_BOOKS_LIST_VIEW_TYPE':
            return {
                ...state.listViewType,
                booksListViewType: action.payload
            };
        case 'SHOW_COMPLETED_BOOKS':
            const {boxId, checked} = action.payload;
            const {showBooks} = state.listViewType;
            return {
                ...state.listViewType,
                showBooks :  Object.assign({}, showBooks, { [boxId] : !checked})
            };
        case 'CHANGE_LIST_ITEMS_WIDTH': {
            const listItemsWidth = action.payload;
            return {
                ...state.listViewType,
                booksListItemsWidth : listItemsWidth
            } 
        }
        default : {
            return state.listViewType
        }
    }
};

export default changeBooksListViewType;
