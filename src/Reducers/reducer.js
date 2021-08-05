import changeViewListConfig from "./changeViewListConfig";
import changeBooksListViewType from "./changeBooksListViewType";
import changeItemStatus from "./changeItemStatus";

const reducer = (state, action) => {
    return {
        listViewType : changeBooksListViewType(state, action),
        listViewConfig : changeViewListConfig(state, action),
        itemStatus : changeItemStatus(state, action)
    }

};

export default reducer