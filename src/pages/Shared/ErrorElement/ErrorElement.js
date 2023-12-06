import React from 'react';

const ErrorElement = ({ message }) => {
    return (
        <div className='my-10'>
            <p
                style={{ color: '#f91944', textAlign: 'center' }}
            >
                Error: {message}
            </p>
        </div>
    );
};

export default ErrorElement;