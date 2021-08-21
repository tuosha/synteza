import React from 'react'
import withCustomView from "../../Decorators/withCustomView";
import ItemsViewConfiguration from "./ItemsViewConfiguration";
import ShowCompletedItems from "./ShowCompletedItems";
import './Customization.css'

const Customization = ()=> {
    return (
        <div className='customization-page'>
            <ShowCompletedItems/>
            <ItemsViewConfiguration/>
        </div>
        )
};


export default withCustomView(Customization)
