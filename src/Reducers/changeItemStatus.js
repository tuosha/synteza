const updateCompletedStatus = (data, oldItem, prop) => {
    const ind = data.findIndex(el => el.id === oldItem.id);
    const newItem = Object.assign({}, oldItem, {[prop]: !oldItem[prop]});
    return [...data.slice(0,ind), newItem, ...data.slice(ind+1)]
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
            completed : false,
        }
    }
    switch (action.type) {
        case 'SELECT_ITEM_ID':
            return {
                ...state.itemStatus,
                selectedItemId : action.payload
            };
        default:
            return state.itemStatus
    }
};

export default changeItemStatus