import React, { useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import ErrorElement from '../../../Shared/ErrorElement/ErrorElement';
import Loading from '../../../Shared/Loading/Loading';
import DoctorRow from './DoctorRow';
import doctorsGif from '../../../../assets/Images/doctors.gif';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { FiArrowRightCircle } from 'react-icons/fi';
import { IoSearch } from 'react-icons/io5';
import useTitle from '../../../../hooks/useTitle';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import useAuth from '../../../../hooks/useAuth';

const ManageDoctors = () => {
    useTitle('Manage Doctors');
    const { logout } = useAuth();
    const navigate = useNavigate();
    const { doctorsCount } = useLoaderData();
    const searchRef = useRef();
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const [limitPerPage, setLimitPerPage] = useState(6);

    const totalPages = Math.ceil(doctorsCount / limitPerPage);

    const handlePrevClick = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleSearch = () => {
        setSearch(searchRef.current.value);
    };

    const { data: doctors = [], isLoading, error, refetch } = useQuery({
        queryKey: ['doctors', currentPage, limitPerPage, search],
        queryFn: async () => {
            const res = await fetch(`https://doc-house-server-rust.vercel.app/doctors?page=${currentPage}&limit=${limitPerPage}&search=${search}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('access-token')}`
                }
            })
            if (res.status === 401 || res.status === 403) {
                logout();
                localStorage.removeItem('access-token');
                navigate('/login');
            }
            const data = await res.json()
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    if (error) {
        return <ErrorElement message={error.message}></ErrorElement>
    }

    return (
        <>
            {
                doctors.length > 0 ?
                    (
                        <div className='bg-[#F1F5F9] min-h-screen py-12 lg:py-20'>
                            <div className='w-11/12 lg:w-3/4 mx-auto bg-white p-5 lg:p-10'>
                                <div>
                                    <div className='lg:flex items-center justify-between mb-3 lg:mb-5'>
                                        <h2 className='text-xl lg:text-2xl font-semibold text-primary'>Manage All Doctors: {doctorsCount}</h2>
                                        <div className="join w-full lg:w-1/2 mt-2 lg:mt-0 flex">
                                            <input
                                                type='text'
                                                ref={searchRef}
                                                className="input input-sm w-full rounded input-bordered join-item focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                                placeholder="Search for doctor..."
                                            />
                                            <button
                                                className="btn btn-sm join-item rounded bg-primary hover:bg-secondary text-white"
                                                onClick={handleSearch}
                                            >
                                                <IoSearch className='text-xl' />
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        {
                                            search && <h2 className='text-lg flex justify-end text-primary mb-1'>Matching Results: 0{doctors?.length}</h2>
                                        }
                                    </div>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="table">
                                        <thead className='bg-[#E6E6E6] text-primary uppercase'>
                                            <tr>
                                                <th></th>
                                                <th>Avatar</th>
                                                <th>Name & Email</th>
                                                <th>Job</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                doctors?.map((doctor, index) => <DoctorRow
                                                    key={doctor._id}
                                                    index={index}
                                                    doctor={doctor}
                                                    refetch={refetch}
                                                ></DoctorRow>)
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            {/* pagination */}
                            <div className='flex items-center justify-center mt-6 lg:mt-10'>
                                <button
                                    onClick={handlePrevClick}
                                    disabled={currentPage === 0}
                                    className='btn btn-primary text-white btn-sm mr-3'
                                >
                                    <MdKeyboardArrowLeft className='text-xl' /> Previous
                                </button>

                                <button
                                    onClick={handleNextClick}
                                    disabled={currentPage === totalPages}
                                    className='btn btn-sm btn-primary text-white'
                                >
                                    Next <MdKeyboardArrowRight className='text-xl' />
                                </button>
                            </div>
                        </div>
                    )
                    :
                    (
                        <div className='w-11/12 lg:w-4/5 mx-auto my-20 lg:my-0'>
                            <img src={doctorsGif} alt="appointment" className='mx-auto' />
                            <Link to={'/dashboard/add-doctor'} className='flex justify-center'>
                                <button className='btn btn-primary btn-sm capitalize text-white'>
                                    Please Add New Doctor
                                    <FiArrowRightCircle className='text-lg' />
                                </button>
                            </Link>
                        </div>
                    )
            }
        </>
    );
};

export default ManageDoctors;