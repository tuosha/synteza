import React from 'react'
import withCustomView from "../../Decorators/withCustomView";
import ItemsViewConfiguration from "./ItemsViewConfiguration";
import ShowCompletedItems from "./ShowCompletedItems";

const Customization = ()=> {
    return (
        <React.Fragment>
            <ShowCompletedItems/>
            <ItemsViewConfiguration/>
        </React.Fragment>
        )
};


export default withCustomView(Customization)
