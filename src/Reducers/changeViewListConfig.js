const changeViewListConfig = (state, action) => {
    if (state === undefined) {
        return {
            booksListViewConfig : {
                title: true,
                author : true,
                publicationDate : true,
                annotation : false,
            },
            showCompletedBooks : true,
        }
    }
    switch (action.type) {
        case 'CHANGE_VIEW_LIST_CONFIG':
            const {boxId, checked} = action.payload;
            const {booksListViewConfig} = state.listViewConfig;
            return {
                ...state.listViewConfig,
                booksListViewConfig : Object.assign({}, booksListViewConfig, { [boxId] : !checked})
            };
        case 'CHANGE_VIEW_COMPLETED_BOOKS':
            return {
                ...state.listViewConfig,
                showCompletedBooks : !state.listViewConfig.showCompletedBooks
            };
        default:
            return state.listViewConfig
    }
};

export default changeViewListConfig