import { useQuery } from '@tanstack/react-query';
import React, { useRef, useState } from 'react';
import ErrorElement from '../../../Shared/ErrorElement/ErrorElement';
import Loading from '../../../Shared/Loading/Loading';
import UserRow from './UserRow';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { IoSearch } from 'react-icons/io5';
import { useLoaderData } from 'react-router-dom';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import useTitle from '../../../../hooks/useTitle';

const AllUsers = () => {
    useTitle('All Users');
    const [axiosSecure] = useAxiosSecure();
    const searchRef = useRef();
    const [search, setSearch] = useState('');
    const { usersCount } = useLoaderData();
    const [currentPage, setCurrentPage] = useState(0);
    const [usersPerPage, setUsersPerPage] = useState(6);

    const totalPages = Math.ceil(usersCount / usersPerPage);

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

    const { data: users, isLoading, error, refetch } = useQuery({
        queryKey: ['users', currentPage, usersPerPage, search],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users?page=${currentPage}&limit=${usersPerPage}&search=${search}`);
            return res.data;
        }
    })

    if (error) {
        return <ErrorElement message={error.message}></ErrorElement>
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='bg-[#F1F5F9] h-full py-12 lg:py-20'>
            <div className='w-11/12 lg:w-3/4 mx-auto bg-white p-5 lg:p-10'>
                <div>
                    <div className='lg:flex items-center justify-between mb-3 lg:mb-5'>
                        <h2 className='text-xl lg:text-2xl font-semibold text-primary'>All Users: {usersCount}</h2>
                        <div className="join w-full lg:w-1/2 mt-2 lg:mt-0 flex">
                            <input
                                type='text'
                                ref={searchRef}
                                className="input input-sm w-full rounded input-bordered join-item focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                placeholder="Search for user..."
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
                            search && <h2 className='text-lg flex justify-end text-primary mb-1'>Matching Results: 0{users?.length}</h2>
                        }
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead className='bg-[#E6E6E6] text-primary uppercase'>
                            <tr>
                                <th></th>
                                <th>Image</th>
                                <th>Name & Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users?.map((user, index) => <UserRow
                                    key={user._id}
                                    index={index}
                                    user={user}
                                    refetch={refetch}
                                ></UserRow>)
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
    );
};

export default AllUsers;