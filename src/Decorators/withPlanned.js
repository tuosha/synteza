import React from 'react';

const withPlanned= (Wrapped) => {
    return (props) => {
        const {data} = props;
        return <Wrapped {...props} data={data.filter(item => !item.completed)}/>
    }
};

export default withPlanned