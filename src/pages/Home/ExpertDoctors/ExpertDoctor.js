import React from 'react';
import { HiOutlineLocationMarker, HiOutlineCurrencyDollar } from 'react-icons/hi'
import { MdOutlineDateRange } from 'react-icons/md'

const ExpertDoctor = ({ expertDoctor }) => {
    const { image, name, job, location, date, price, button } = expertDoctor;

    return (
        <div className="card border">
            <figure className="px-5 pt-5">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body px-5 p-0">


                <div style={{ borderBottom: '1px solid #F3F3F3' }}>
                    <h2 className="card-title text-neutral">{name}</h2>
                    <p>{job}</p>
                    <div className="rating mt-0">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-4 mr-1" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-4 mr-1" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-4 mr-1" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-4 mr-1" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-4 mr-1" />
                    </div>
                </div>

                <div>
                    <p className='flex items-center'>
                        <HiOutlineLocationMarker className=' text-2xl text-accent mr-2'></HiOutlineLocationMarker>
                        <span className='text-accent text-sm'>{location}</span>
                    </p>
                    <p className='flex items-center'>
                        <MdOutlineDateRange className=' text-2xl text-accent mr-2'></MdOutlineDateRange>
                        <span className='text-accent text-sm'>{date}</span>
                    </p>
                    <p className='flex items-center'>
                        <HiOutlineCurrencyDollar className=' text-2xl text-accent mr-2'></HiOutlineCurrencyDollar>
                        <span className='text-accent text-sm'>{price}</span>
                    </p>
                </div>


                <div className="card-actions group w-full">
                    <button className={`${button} capitalize w-full`}>View Profile</button>
                </div>
            </div>
        </div>
    );
};

export default ExpertDoctor;