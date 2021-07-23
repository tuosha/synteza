import React from 'react';
import {CustomViewConsumer} from "../Services/ContexCustomViewService";

const withCustomView = (Wrapped) => {
    return (props) => {
        return (
            <CustomViewConsumer>
                {
                    (config) => {
                         return <Wrapped {...props} config={config}/>
                    }
                }
            </CustomViewConsumer>
        )
    }
};

export default withCustomView

