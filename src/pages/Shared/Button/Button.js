import React from 'react';

const Button = ({children}) => {
    return (
        <div>
            <button className='bg-secondary text-white px-6 py-2 rounded-md font-medium'>{children}</button>
        </div>
    );
};

export default Button;