import React from 'react';
import { BsCheck2Square } from "react-icons/bs";
import { MdLibraryAddCheck } from "react-icons/md";

const Overview = ({ doctorProfile }) => {
    const { description, educations, experiences, services, awards, specializations } = doctorProfile;

    return (
        <div className='shadow-md rounded-xl px-10 py-10 border'>
            <button className='btn btn-secondary btn-sm px-12 text-white capitalize rounded'>Overview</button>
            
            <div className='my-5'>
                <h2 className='flex items-center text-lg text-neutral font-bold mb-1'><MdLibraryAddCheck className='mr-1 text-xl' /> About Me</h2>
                <p className='text-sm text-accent ml-5'>{description}</p>
            </div>
           
           
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className=''>
                    <div>
                        <h2 className='flex items-center text-neutral font-bold text-lg'><MdLibraryAddCheck className='mr-1 text-xl' /> Education</h2>
                        {
                            educations.map(education => (
                                <div key={education.id} className='ml-5'>
                                    <h3 className='font-semibold text-neutral'>{education.university}</h3>
                                    <p>{education.graduate}</p>
                                    <p>{education.year}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div>
                        <h2 className=' text-neutral font-bold'>Work & Experiences</h2>
                        {
                            experiences.map(experience => (
                                <div key={experience.id}>
                                    <h3>{experience.hospital}</h3>
                                    <p>{experience.year}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div>
                        <h2 className='font-bold text-neutral'>Services</h2>
                        {
                            services.map((service, index) => (
                                <p key={index}>
                                    {service}
                                </p>
                            ))
                        }
                    </div>
                </div>


                <div className=''>
                    <div>
                        <h2 className='font-bold text-neutral'>Awards</h2>
                        {
                            awards.map(award => (
                                <div key={award.id}>
                                    <h3>{award.subject}</h3>
                                    <p>{award.year}</p>
                                    <p>{award.details}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div>
                        <h2 className='font-bold text-neutral'>Specializations</h2>
                        {
                            specializations.map((specialization, index) => (
                                <p key={index}>
                                    {specialization}
                                </p>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;