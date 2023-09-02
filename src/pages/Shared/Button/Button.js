import React from 'react';

const Button = ({ children }) => {
    return (
        <button className='btn btn-secondary text-white px-6 capitalize rounded-md font-medium'>{children}</button>
    );
};

export default Button;