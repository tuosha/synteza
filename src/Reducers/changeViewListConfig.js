const changeViewListConfig = (state, action) => {
    if (state === undefined) {
        return {
            booksListViewConfig : {
                title : true,
                author : true,
                publicationDate : true,
                annotation : false
            }
        }
    }
    const {booksListViewConfig} = state.listViewConfig;
    switch (action.type) {
        case 'CHANGE_VIEW_LIST_CONFIG':
            const {boxId, checked} = action.payload;
            return {
                ...state.listViewConfig,
                booksListViewConfig : Object.assign({}, booksListViewConfig, { [boxId] : !checked})
            };

        default:
            return state.listViewConfig
    }
};

export default changeViewListConfig