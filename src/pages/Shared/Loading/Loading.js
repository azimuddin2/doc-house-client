import React from 'react';
import ReactLoading from 'react-loading';

const Loading = () => {
    return (
        <div
        // className='my-5 d-flex justify-content-center align-items-center'
        >
            <ReactLoading
                type='bars'
                color='#f91944'
                height='60px'
                width='60px'
            />
        </div>
    );
};

export default Loading;