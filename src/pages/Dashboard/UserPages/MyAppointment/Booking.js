import React from 'react';

const Booking = ({ index, booking, setPayment }) => {
    const { patientName, treatment, date, slot, price, paid, transactionId } = booking;

    return (
        <tr className='font-semibold'>
            <td>{index + 1}</td>
            <td>
                {patientName}
            </td>
            <td>{treatment}</td>
            <td>
                {date}
                <br />
                <span className="badge badge-ghost badge-sm">{slot}</span>
            </td>
            <td className='text-secondary font-bold'>${price}</td>
            <td>
                {
                    paid ?
                        <>
                            <p className='text-green-500 font-semibold'>Paid</p>
                            <p>{transactionId}</p>
                        </>
                        :
                        <label
                            onClick={() => setPayment(booking)}
                            htmlFor="payment-modal"
                            className='btn btn-sm btn-primary text-white rounded'
                        >
                            Pay
                        </label>
                }
            </td>
        </tr>
    );
};

export default Booking;