import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import ErrorElement from '../../../Shared/ErrorElement/ErrorElement';
import Loading from '../../../Shared/Loading/Loading';
import Booking from './Booking';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import PaymentModal from '../PaymentModal/PaymentModal';
import useTitle from '../../../../hooks/useTitle';
import appointmentGif from '../../../../assets/Images/appointment.gif';
import { Link } from 'react-router-dom';
import { LuCalendarClock } from 'react-icons/lu';

const MyAppointment = () => {
    useTitle('My Appointment');
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [payment, setPayment] = useState(null);

    const { data: bookings = [], error, isLoading, refetch } = useQuery({
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
        <>
            {
                bookings.length > 0 ?
                    (
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
                                                    setPayment={setPayment}
                                                ></Booking>)
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            {
                                payment && <PaymentModal
                                    payment={payment}
                                    setPayment={setPayment}
                                    refetch={refetch}
                                ></PaymentModal>
                            }
                        </div>
                    )
                    :
                    (
                        <div className='w-11/12 lg:w-4/5 mx-auto my-20 lg:my-0'>
                            <img src={appointmentGif} alt="appointment" className='mx-auto' />
                            <Link to={'/appointment'} className='flex justify-center'>
                                <button className='btn btn-primary btn-sm capitalize text-white'>
                                    Please Appointment
                                    <LuCalendarClock className='text-lg' />
                                </button>
                            </Link>
                        </div>
                    )
            }
        </>
    );
};

export default MyAppointment;