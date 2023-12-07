import React from 'react';
import { BsCheck2Circle, BsFillInfoSquareFill } from "react-icons/bs";
import { MdLibraryAddCheck, MdWorkHistory } from "react-icons/md";
import { FaAward, FaGraduationCap } from "react-icons/fa6";
import { HiClipboardDocumentList } from "react-icons/hi2";

const Overview = ({ doctorProfile }) => {
    const { description, educations, experiences, services, awards, specializations } = doctorProfile;

    return (
        <div className='shadow-md rounded-xl border py-6 p-4 lg:p-8'>
            <button className='btn btn-secondary btn-sm px-12 text-white capitalize rounded'>Overview</button>
            <div className='my-5'>
                <h2 className='flex items-center text-lg text-neutral font-bold mb-1'>
                    <MdLibraryAddCheck className='mr-1 text-xl' /> About Me
                </h2>
                <p className='text-sm text-accent ml-5'>{description}</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div>
                    <div>
                        <h2 className='flex items-center text-neutral font-bold text-lg mb-1'>
                            <FaGraduationCap className='mr-1 text-xl' /> Education
                        </h2>
                        {
                            educations.map(education => (
                                <div key={education.id} className='ml-5 mb-2'>
                                    <h3 className='font-semibold text-neutral flex items-center'><BsCheck2Circle className='mr-1 text-primary text-lg' /> {education.university}</h3>
                                    <p className='ml-5 text-accent'>{education.graduate}</p>
                                    <p className='ml-5 text-accent'>{education.year}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className='my-5'>
                        <h2 className='flex items-center text-neutral font-bold text-lg mb-1'>
                            <MdWorkHistory className='mr-1 text-xl' /> Work & Experiences
                        </h2>
                        {
                            experiences.map(experience => (
                                <div key={experience.id} className='ml-5 mb-2'>
                                    <h3 className='font-semibold text-neutral flex items-center'><BsCheck2Circle className='mr-1 text-primary text-lg' /> {experience.hospital}</h3>
                                    <p className='ml-5 text-accent'>{experience.year}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div>
                        <h2 className='flex items-center text-lg text-neutral font-bold mb-1'>
                            <HiClipboardDocumentList className='mr-1 text-xl' /> Services
                        </h2>
                        <h2 className='font-bold text-neutral'></h2>
                        {
                            services.map((service, index) => (
                                <p key={index} className='flex items-center ml-5 mb-1'>
                                    <BsCheck2Circle className='mr-2 text-primary text-lg' /> {service}
                                </p>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <div className='mb-6'>
                        <h2 className='flex items-center text-neutral font-bold text-lg mb-1'>
                            <FaAward className='mr-1 text-xl' /> Awards
                        </h2>
                        {
                            awards.map(award => (
                                <div key={award.id} className='ml-5 mb-2'>
                                    <h3 className='font-semibold text-neutral flex items-center'><BsCheck2Circle className='mr-1 text-primary text-lg' /> {award.subject}</h3>
                                    <p className='ml-5'>{award.year}</p>
                                    <p className='ml-5 text-accent text-sm'>{award.details}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div>
                        <h2 className='flex items-center text-neutral font-bold text-lg mb-1'>
                            <BsFillInfoSquareFill className='mr-2 ' /> Specializations
                        </h2>
                        {
                            specializations.map((specialization, index) => (
                                <p key={index} className='flex items-center ml-5 mb-1 font-normal'>
                                    <BsCheck2Circle className='mr-2 text-primary text-lg' /> {specialization}
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