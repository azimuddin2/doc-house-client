import React from 'react';
import { HiOutlineLocationMarker, HiOutlineCurrencyDollar } from 'react-icons/hi'
import { MdOutlineDateRange } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';

const ExpertDoctor = ({ expertDoctor }) => {
    const { _id, image, name, job, location, date, price, button } = expertDoctor;

    const navigate = useNavigate();

    return (
        <div className="card border">
            <figure className="p-5">
                <img src={image} alt={name} />
            </figure>
            <div className="card-body px-5 p-0 pb-5">
                <div style={{ borderBottom: '1px solid #F3F3F3' }}>
                    <h2 className="card-title text-neutral text-xl font-semibold">{name}</h2>
                    <p className=' text-accent text-base'>{job}</p>
                    <div className="rating my-2">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-4 mr-1" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-4 mr-1" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-4 mr-1" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-4 mr-1" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-4 mr-1" />
                    </div>
                </div>
                <div className='my-2'>
                    <p className='flex items-center mb-2'>
                        <HiOutlineLocationMarker className='text-2xl text-accent mr-2'></HiOutlineLocationMarker>
                        <span className='text-accent text-base'>{location}</span>
                    </p>
                    <p className='flex items-center mb-2'>
                        <MdOutlineDateRange className='text-2xl text-accent mr-2'></MdOutlineDateRange>
                        <span className='text-accent text-base'>{date}</span>
                    </p>
                    <p className='flex items-center'>
                        <HiOutlineCurrencyDollar className='text-2xl text-accent mr-2'></HiOutlineCurrencyDollar>
                        <span className='text-accent text-base'>{price}</span>
                    </p>
                </div>
                <div className="card-actions group w-full">
                    <button
                        onClick={() => navigate(`/doctor-profile/${_id}`)}
                        className={button ? 'btn btn-secondary text-white capitalize w-full' : 'btn btn-outline btn-secondary group-hover:text-white capitalize w-full'}
                    >
                        View Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ExpertDoctor;