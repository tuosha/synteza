import React from "react";

/*For add classNames use object *example: {div : 'param1 param2', input : 'param1 param2'', label : 'param1 param2'' }*/
const createConfigList = (config, onHandleChange, optionsClassNames = {}) => {
    optionsClassNames = new Proxy(optionsClassNames,
        {get(obj, key) {return (key in obj) ? obj[key] : ''},
        });
    const toggleChange = (e) => {
        const boxId = e.target.id;
        const checked = e.target.defaultChecked;
        onHandleChange({boxId, checked})
    };
    return (
        config.map(([key, val]) =>
            <div className={`custom-control custom-checkbox ${optionsClassNames.div}`}
                 key={key}>
                <input type="checkbox"
                       className={`custom-control-input ${optionsClassNames.input}`}
                       id={key}
                       defaultChecked={val}
                       onClick={toggleChange}/>
                <label className={`custom-control-label ${optionsClassNames.label}`}
                       htmlFor={key}>{key[0].toUpperCase() + key.slice(1, key.length)}</label>
            </div>
        )
    )
};


export {createConfigList}