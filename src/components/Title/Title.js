import React from 'react';

const Title = ({ heading, title }) => {
    return (
        <div className='w-4/5 md:w-2/4 lg:w-1/3 mx-auto text-center mb-10'>
            <p className='text-secondary mb-2 text-xl font-family'>---{heading}!---</p>
            <h2 className='text-primary uppercase text-2xl lg:text-3xl font-normal border-y-2 border-[#F1F5F9] py-3'>{title}</h2>
        </div>
    );
};

export default Title;