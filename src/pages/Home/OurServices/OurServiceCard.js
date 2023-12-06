import React from 'react';
import { Link } from 'react-router-dom';

const OurServiceCard = ({ item }) => {
    const { name, image, description, details } = item;

    return (
        <div className='mt-8'>
            <img src={image} alt="Service" />
            <h2 className=' text-neutral font-semibold text-2xl mt-5 mb-4'>{name}</h2>
            <p className='text-accent text-sm mb-3'>{description}</p>
            <p className='text-accent text-sm mb-6'>{details}</p>
            <Link to="/appointment" className='group'>
                <button className='btn btn-outline btn-secondary group-hover:text-white capitalize'>Appointment</button>
            </Link>
        </div>
    );
};

export default OurServiceCard;