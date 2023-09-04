import React from 'react';
import Button from '../../Shared/Button/Button';

const OurServiceCard = ({ item }) => {
    const { name, image, description, details } = item;

    return (
        <div className='mt-8'>
            <img src={image} alt="" />
            <h2 className=' text-neutral font-semibold text-2xl mt-5 mb-4'>{name}</h2>
            <p className='text-accent text-sm mb-3'>{description}</p>
            <p className='text-accent text-sm mb-6'>{details}</p>
            <Button>Appointment</Button>
        </div>
    );
};

export default OurServiceCard;