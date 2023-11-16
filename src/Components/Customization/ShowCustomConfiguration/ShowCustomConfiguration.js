import './ShowCustomConfiguration.css'
import React from 'react'

const ShowCustomConfiguration = ({title, divClassName, configItems, createConfigFunction, onChangeConfig, optionsClassNames} = defaultConfiguration) => {
    const items =  Object.entries(configItems);
    const configList = createConfigFunction(items, onChangeConfig, optionsClassNames);
    return (
        <div className={divClassName}>
            <h4>{title}</h4>
            {configList}
        </div>
    )
};

const defaultConfiguration = {
    title : '',
    divClassName: '',
    configItems : {},
    createConfigFunction : () => {},
    onChangeConfig : () => {},
    optionsClassNames : {},
};

export default ShowCustomConfiguration