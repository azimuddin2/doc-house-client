import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import ErrorElement from '../../../Shared/ErrorElement/ErrorElement';
import Loading from '../../../Shared/Loading/Loading';
import AppointmentRow from './AppointmentRow';

const AllAppointments = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: allAppointments = [], isLoading, error } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/bookings`)
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
        <div className='bg-[#F1F5F9] h-full py-16'>
            <div className='w-11/12 lg:w-4/5 mx-auto bg-white p-5 lg:p-10'>
                <div className='mb-4'>
                    <h2 className='text-xl lg:text-2xl font-semibold text-primary'>All Appointments: 0{allAppointments?.length}</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead className='bg-[#E6E6E6] text-primary uppercase'>
                            <tr>
                                <th></th>
                                <th>Name & Email</th>
                                <th>Treatment</th>
                                <th>Treatment Date & Time</th>
                                <th>Price</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allAppointments?.map((appointment, index) => <AppointmentRow
                                    key={appointment._id}
                                    index={index}
                                    appointment={appointment}
                                ></AppointmentRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllAppointments;