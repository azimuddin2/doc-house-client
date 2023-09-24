import React from 'react';

const Service = ({ service, setTreatment }) => {
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
                <p>Price: <span className='text-secondary font-medium'>${price}</span></p>
                <div className="card-actions">
                    <label
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                        htmlFor="booking-modal"
                        className="btn btn-secondary text-white capitalize"
                    >
                        Booking Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Service;