import React from 'react';
import quote from '../../../assets/Icons/quote.svg';
import StarRatings from 'react-star-ratings';

const Testimonial = ({ testimonial }) => {
    const { image, name, location, description, rating } = testimonial;

    return (
        <div className="card p-6 border mt-20 lg:mt-8 ">
            <div className='flex items-center justify-between'>
                <div className='md:flex items-center'>
                    <div className="avatar">
                        <div className="w-14 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-1">
                            <img src={image} alt={name} />
                        </div>
                    </div>
                    <div className='ml-5'>
                        <h2 className='text-base lg:text-xl font-bold text-neutral'>{name}</h2>
                        <p className='font-semibold text-accent'>{location}</p>
                    </div>
                </div>
                <figure>
                    <img src={quote} alt="Shoes" className='w-12' />
                </figure>
            </div>
            <div className="mt-4">
                <p className='text-sm text-accent capitalize leading-6'>{description}</p>
                <div className="mt-3">
                    <StarRatings
                        rating={rating}
                        starRatedColor="#F2871D"
                        name="rating"
                        starSpacing="1px"
                        starDimension="20px"
                    />
                </div>
            </div>
        </div>
    );
};

export default Testimonial;