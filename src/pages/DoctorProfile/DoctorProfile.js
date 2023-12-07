import React from 'react';
import PageCover from '../../components/PageCover/PageCover';
import { useLoaderData } from 'react-router-dom';
import { HiOutlineCurrencyDollar, HiOutlineLocationMarker } from 'react-icons/hi';
import { MdOutlineDateRange } from 'react-icons/md';
import StarRatings from 'react-star-ratings';
import Overview from './Overview';

const DoctorProfile = () => {
    const doctorProfile = useLoaderData();
    const { image, name, job, location, date, price, rating } = doctorProfile;

    return (
        <section>
            <PageCover title={'Doctor Profile'}></PageCover>
            <div className='max-w-screen-lg lg:mx-auto mx-5 my-10 lg:my-16'>
                <div className="card lg:card-side py-0 bg-white shadow-md border p-6">
                    <figure>
                        <img src={image} alt={name} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-bold">Dr. {name}</h2>
                        <p className='text-accent text-base'>{job}</p>
                        <StarRatings
                            rating={rating}
                            starRatedColor="#F2871D"
                            name="rating"
                            starSpacing="1px"
                            starDimension="20px"
                        />
                        <p className='flex items-center'>
                            <HiOutlineLocationMarker className='text-2xl text-accent mr-2' />
                            <span className='text-accent text-base'>{location}</span>
                        </p>
                        <p className='flex items-center'>
                            <MdOutlineDateRange className='text-2xl text-accent mr-2' />
                            <span className='text-accent text-base'>{date}</span>
                        </p>
                        <p className='flex items-center'>
                            <HiOutlineCurrencyDollar className='text-2xl text-accent mr-2' />
                            <span className='text-accent text-base'>{price}</span>
                        </p>
                    </div>
                </div>
                <div className='mt-10'>
                    <Overview doctorProfile={doctorProfile}></Overview>
                </div>
            </div>
        </section>
    );
};

export default DoctorProfile;