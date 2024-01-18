import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import ErrorElement from '../../../Shared/ErrorElement/ErrorElement';
import Loading from '../../../Shared/Loading/Loading';
import AppointmentRow from './AppointmentRow';
import ReactDatePicker from 'react-datepicker';
import { MdOutlineDateRange } from 'react-icons/md';
import { format } from 'date-fns';
import searchGif from '../../../../assets/Images/search.gif';
import useTitle from '../../../../hooks/useTitle';

const AllAppointments = () => {
    useTitle('All Appointments');
    const [selectDate, setSelectDate] = useState(new Date());
    const formatDate = format(selectDate, 'PP');

    const { data: allAppointments = [], isLoading, error, refetch } = useQuery({
        queryKey: ['bookings', formatDate],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?date=${formatDate}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('access-token')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    if (error) {
        return <ErrorElement message={error.message}></ErrorElement>
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='bg-[#F1F5F9] min-h-screen py-12 lg:py-20'>
            <div className='w-11/12 lg:w-4/5 mx-auto bg-white p-5 lg:p-10'>

                <div className='mb-4 md:flex items-center justify-between'>
                    <h2 className='text-xl lg:text-2xl font-semibold text-primary text-center'>All Appointments: 0{allAppointments?.length}</h2>
                    <div className='relative bg-primary rounded-md mt-3 lg:mt-0'>
                        <ReactDatePicker
                            name='date'
                            className="w-full input input-sm input-bordered focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                            showIcon
                            selected={selectDate}
                            onChange={(date) => setSelectDate(date)}
                            dateFormat="MMM d, yyyy"
                        ></ReactDatePicker>
                        <MdOutlineDateRange className='text-lg mr-2 absolute right-1 top-2 text-white'></MdOutlineDateRange>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    {
                        allAppointments.length > 0 ?
                            (
                                <table className="table">
                                    <thead className='bg-[#E6E6E6] text-primary uppercase'>
                                        <tr>
                                            <th></th>
                                            <th>Name & Email</th>
                                            <th>Treatment</th>
                                            <th>Treatment Date & Time</th>
                                            <th>Price</th>
                                            <th>Payment Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            allAppointments?.map((appointment, index) => <AppointmentRow
                                                key={appointment._id}
                                                index={index}
                                                appointment={appointment}
                                                refetch={refetch}
                                            ></AppointmentRow>)
                                        }
                                    </tbody>
                                </table>
                            )
                            :
                            (
                                <div>
                                    <img src={searchGif} alt="" className='mx-auto' />
                                </div>
                            )
                    }
                </div>

            </div>
        </div>
    );
};

export default AllAppointments;