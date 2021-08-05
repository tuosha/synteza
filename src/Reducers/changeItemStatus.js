const updateStatus = (oldStatus, nextStatus) => {
    Object.assign(oldStatus, nextStatus,  )
};

const changeItemStatus = (state, action) => {
    if (state === undefined) {
        return {
            selectedItemId : 1,
            defaultBookStatus : 'inPlan',
            currentStatus : '',
            bookStatus : ['inPlan', 'inProgress', 'beforeCompleted', 'completed'],
            bookStatusColors : {
                'inPlan' : 'green',
                'inProgress' : 'yellow',
                'beforeCompleted' : 'red',
                'completed' : 'grey'
            },
            completed : false
        }
    }
    switch (action.type) {
        case 'SELECT_ITEM_ID':
            return {
                selectedItemId : action.payload
            };
        case 'CHANGE_BOOK_STATUS':
            console.log(action.payload);
            return {
                currentStatus: updateStatus(action.payload)
            };
        default:
            return state.itemStatus
    }
};

export default changeItemStatus