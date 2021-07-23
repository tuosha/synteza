import React from 'react';

const withFinished = (Wrapped) => {
    return (props) => {
        const date = new Date().getFullYear();
        return <Wrapped {...props} date = {date}/>
    }
};

export default withFinished