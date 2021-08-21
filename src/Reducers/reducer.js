import changeViewListConfig from "./changeViewListConfig";
import changeBooksListViewType from "./changeBooksListViewType";
import changeItemStatus from "./changeItemStatus";
import fetchDataFromServer from "./fetchDataFromServer";

const reducer = (state, action) => {
    return {
        dataFromServer : fetchDataFromServer(state, action),
        listViewType : changeBooksListViewType(state, action),
        listViewConfig : changeViewListConfig(state, action),
        itemStatus : changeItemStatus(state, action)
    }

};

export default reducer