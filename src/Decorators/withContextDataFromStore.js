import React from 'react';
import {DataConsumer} from "../Services/ContextDataService";

const withContextDataFromStore = (Wrapped) => {
    return (props) => {
        return (
            <DataConsumer>
                {
                    (dataApi) => {
                        return (
                            <Wrapped {...props} dataApi = {dataApi}/>
                        )
                    }
                }
            </DataConsumer>
        )
    }
};

export default withContextDataFromStore