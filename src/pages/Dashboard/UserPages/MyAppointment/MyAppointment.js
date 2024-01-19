import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import ErrorElement from '../../../Shared/ErrorElement/ErrorElement';
import Loading from '../../../Shared/Loading/Loading';
import Booking from './Booking';
import PaymentModal from '../PaymentModal/PaymentModal';
import useTitle from '../../../../hooks/useTitle';
import appointmentGif from '../../../../assets/Images/appointment.gif';
import { Link, useNavigate } from 'react-router-dom';
import { LuCalendarClock } from 'react-icons/lu';

const MyAppointment = () => {
    useTitle('My Appointment');
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [payment, setPayment] = useState(null);

    const { data: bookings = [], error, isLoading, refetch } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/booking?email=${user?.email}`, {
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
                bookings.length > 0 ?
                    (
                        <div className='bg-[#F1F5F9] min-h-screen py-16'>
                            <div className='w-11/12 lg:w-4/5 mx-auto bg-white p-5 lg:p-10'>
                                <div className='mb-4'>
                                    <h2 className='text-xl lg:text-2xl font-semibold text-primary'>My Appointment: 0{bookings?.length}</h2>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="table">
                                        <thead className='bg-[#E6E6E6] text-primary uppercase'>
                                            <tr>
                                                <th></th>
                                                <th>Name</th>
                                                <th>Treatment</th>
                                                <th>Treatment Date & Time</th>
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