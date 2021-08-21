const updateCompletedStatus = (data, oldItem, prop) => {
    const ind = data.findIndex(el => el.id === oldItem.id);
    const newItem = Object.assign({}, oldItem, {[prop]: !oldItem[prop]});
    return [...data.slice(0,ind), newItem, ...data.slice(ind+1)]
};

const fetchDataFromServer = (state, action) => {
    if (state === undefined){
        return {
            data : [],
            loading : false,
            error : null
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
            const {data} = state.dataFromServer;
            return {
                ...state.dataFromServer,
                data  : updateCompletedStatus(data, item, 'completed')
            };
        default :
            return state.dataFromServer
    }
};

export default fetchDataFromServer