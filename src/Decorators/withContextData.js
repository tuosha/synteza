import React from 'react';
import {DataConsumer} from "../Services/ContextDataService";

const withContextData = (mapDataToProps) => (Wrapped) => {
    return (props) => {
        return (
            <DataConsumer>
                {
                    (dataApi) => {
                        const data = mapDataToProps(dataApi);
                        return (
                          <Wrapped {...props} {...data}/>
                        )
                    }
                }
            </DataConsumer>
        )
    }
};

export default withContextData