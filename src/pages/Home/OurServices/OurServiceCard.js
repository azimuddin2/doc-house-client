import React from 'react';
import Button from '../../Shared/Button/Button';

const OurServiceCard = ({ item }) => {
    const { name, image, description, details } = item;

    return (
        <div>
            <img src={image} alt="" />
            <h2 className=' text-neutral font-semibold text-2xl'>{name}</h2>
            <p className='text-accent text-sm'>{description}</p>
            <p className='text-accent text-sm'>{details}</p>
            <Button>More Details</Button>
        </div>
    );
};

export default OurServiceCard;