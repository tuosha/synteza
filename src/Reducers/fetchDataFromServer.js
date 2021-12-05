const updateCurrentStatus = (data, oldItem, current, color, completed, statusList) => {
    const newItem = Object.assign({}, oldItem);
    let counter = newItem.counter || 0;
    const ind = data.findIndex(el => el.id === oldItem.id);
    const nextStatus = Object.entries(statusList);
    if (counter < nextStatus.length-1 && !newItem[completed]) {
        return [...data.slice(0,ind),
            Object.assign({}, newItem,{[current]: nextStatus[counter][0], [color] : nextStatus[counter][1], counter : counter+1}),
            ...data.slice(ind+1)]
    }
    return [...data.slice(0,ind),
        Object.assign({}, newItem,{[completed]: true, [current] : nextStatus[counter][0], [color] : nextStatus[counter][1]}),
        ...data.slice(ind+1)]
};

const fetchDataFromServer = (state, action) => {
    if (state === undefined){
        return {
            data : [],
            loading : false,
            error : null,
            bookStatusList : {
                'Planned' : "#ccd5dd",
                'In progress' :  "#45d58c",
                'Before completed' : "#a4cbf6",
                'Completed' : "#ff8484"
            },
            booksStatusViewConfig : {
                statusColor : true,
                statusName : true,
                statusFontColor : false
            }
        }
    }
    switch (action.type) {
        case 'FETCH_BOOKS_REQUESTED':
            return {
                ...state.dataFromServer,
                data : [],
                loading : true,
                error : null
            };
        case 'FETCH_BOOKS_LOADED':
            return {
                ...state.dataFromServer,
                data : action.payload,
                loading : false,
                error : null
            };
        case 'FETCH_BOOKS_ERROR':
            return {
                ...state.dataFromServer,
                data : [],
                loading : false,
                error : action.payload
            };
        case 'CHANGE_BOOK_STATUS':
            const item = action.payload;
            const {data, bookStatusList} = state.dataFromServer;
            return {
                ...state.dataFromServer,
                data : updateCurrentStatus(data, item,
                    'currentStatus',
                    'statusColor',
                    'completed',
                    bookStatusList)
            };

        default :
            return state.dataFromServer
    }
};

export default fetchDataFromServer