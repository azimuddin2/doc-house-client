import React from 'react';
import { ClockLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='my-24 flex items-center justify-center'>
            <ClockLoader
                color="#07332F"
            />
        </div>
    );
};

export default Loading;