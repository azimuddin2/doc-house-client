import React from 'react';

const Service = ({ service }) => {
    const { image, name, price, slots } = service;

    return (
        <div className="card shadow-lg">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>
                    {
                        slots.length > 0 ?
                            <span>{slots[0]}</span>
                            :
                            <span className='text-red-500 font-semibold'>Try Another Date </span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                <p>Price: <span>${price}</span></p>
                <div className="card-actions">
                    <button
                        disabled={slots.length === 0}
                        className="btn btn-secondary text-white capitalize"
                    >
                        Book Appointment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Service;