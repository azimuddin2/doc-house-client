import React from 'react';

const InfoCard = ({ singleInfo }) => {
    const { img, title, description, bgColor } = singleInfo;

    return (
        <div className={`card lg:card-side pt-6 lg:pt-0 rounded-lg shadow-xl text-white ${bgColor}`}>
            <figure className='lg:w-28'>
                <img className='pl-0 lg:pl-8 w-16 lg:w-24' src={img} alt={title} />
            </figure>
            <div className="card-body pt-4 lg:pt-8">
                <h2 className="card-title justify-center lg:justify-start">{title}</h2>
                <p className='text-center lg:text-left text-sm'>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;