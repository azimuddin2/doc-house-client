import React from 'react';
import PageCover from '../../components/PageCover/PageCover';
import { useLoaderData } from 'react-router-dom';

const DoctorProfile = () => {
    const doctorProfile = useLoaderData();
    const { image, name, job, location, date, price } = doctorProfile;

    return (
        <section>
            <PageCover title={'Doctor Profile'}></PageCover>
            <div className='max-w-screen-lg lg:mx-auto mx-5 my-10 lg:my-16'>
                <div className="card lg:card-side bg-white shadow-xl p-6">
                    <figure>
                        <img src={image} alt={name} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-bold">Dr. {name}</h2>
                        <p>{job}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DoctorProfile;