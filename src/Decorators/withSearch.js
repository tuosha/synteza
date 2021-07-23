import React from "react";
import {SearchConsumer} from "../Services/ContextSearchService";

const withSearch = (onSearch) => (Wrapped) => {
    return (props) => {
        return (
            <SearchConsumer>
                {
                    (searched) => {
                        const data = onSearch(props.data, searched);
                        return <Wrapped {...props} data={data}/>}
                }
            </SearchConsumer>
        )}
};

export default withSearch