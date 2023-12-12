import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import ErrorElement from '../../../Shared/ErrorElement/ErrorElement';
import Loading from '../../../Shared/Loading/Loading';
import Booking from './Booking';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const MyAppointment = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: bookings = [], error, isLoading } = useQuery({
        queryKey: ['booking', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/booking?email=${user?.email}`);
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
            <div className='w-11/12 lg:w-5/6 mx-auto bg-white p-5 lg:p-10'>
                <div className='mb-4'>
                    <h2 className='text-xl font-bold text-primary'>My Appointment: {bookings?.length}</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead className='bg-[#E6E6E6] text-primary uppercase'>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Treatment</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Price</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings?.map((booking, index) => <Booking
                                    key={booking._id}
                                    index={index}
                                    booking={booking}
                                ></Booking>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyAppointment;