import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useAuth from '../../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import ErrorElement from '../../../Shared/ErrorElement/ErrorElement';
import Loading from '../../../Shared/Loading/Loading';
import PaymentRow from './PaymentRow';
import useTitle from '../../../../hooks/useTitle';
import paymentGif from '../../../../assets/Images/payment.gif';
import { Link } from 'react-router-dom';
import { FiArrowRightCircle } from "react-icons/fi";

const PaymentHistory = () => {
    useTitle('Payment History');
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();

    const { data: payments = [], isLoading, error } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments?email=${user?.email}`)
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
                payments.length > 0 ?
                    (
                        <div className='bg-[#F1F5F9] h-full py-16'>
                            <div className='w-11/12 lg:w-4/5 mx-auto bg-white p-5 lg:p-10'>
                                <div className='mb-4'>
                                    <h2 className='text-xl lg:text-2xl font-semibold text-primary'>Payment History: 0{payments?.length}</h2>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="table">
                                        <thead className='bg-[#E6E6E6] text-primary uppercase'>
                                            <tr>
                                                <th></th>
                                                <th>Treatment</th>
                                                <th>Date & Time</th>
                                                <th>Price</th>
                                                <th>TransactionId</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                payments?.map((payment, index) => <PaymentRow
                                                    key={payment._id}
                                                    index={index}
                                                    payment={payment}
                                                ></PaymentRow>)
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )
                    :
                    (
                        <div className='w-11/12 lg:w-4/5 mx-auto my-20 lg:my-8'>
                            <img src={paymentGif} alt="paymentGif" className='mx-auto' />
                            <Link to={'/dashboard/my-appointment'} className='flex justify-center'>
                                <button className='btn btn-primary btn-sm capitalize text-white'>
                                    Please Payment
                                    <FiArrowRightCircle className='text-lg' />
                                </button>
                            </Link>
                        </div>
                    )
            }
        </>
    );
};

export default PaymentHistory;