import React from 'react';

const Button = ({ children }) => {
    return (
        <button className='w-full lg:w-1/2 btn btn-primary text-white px-6 capitalize rounded-md font-medium'>{children}</button>
    );
};

export default Button;