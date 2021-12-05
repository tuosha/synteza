
const changeItemStatus = (state, action) => {
    if (state === undefined) {
        return {
            selectedItemId: 1,
            booksStatusViewConfig: {
                currentStatus: {
                    label: 'Show current status',
                    defaultCheck: true
                },
                statusColor: {
                    label: 'Use background colors',
                    defaultCheck: false
                },
                fontStatusColor: {
                    label: 'Use font colors',
                    defaultCheck: false
                }
            },
        }
    }
    switch (action.type) {
        case 'SELECT_ITEM_ID':
            return {
                ...state.itemStatus,
                selectedItemId : action.payload
            };
        case 'CHANGE_ITEM_STATUS':
            return {
                ...state.itemStatus
            };
        default:
            return state.itemStatus
    }
};

export default changeItemStatus