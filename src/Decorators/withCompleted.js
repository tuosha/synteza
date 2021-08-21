import React from 'react';

const withCompleted = (Wrapped) => {
    return (props) => {
        console.log(props);
        return <Wrapped {...props} />
    }
};



export default withCompleted