import React from 'react';

const Booking = ({ index, booking, setPayment }) => {
    const { patientName, treatment, date, slot, price } = booking;

    return (
        <tr className='font-semibold'>
            <td>{index + 1}</td>
            <td>
                {patientName}
            </td>
            <td>{treatment}</td>
            <td>{date}</td>
            <td>{slot}</td>
            <td className='text-secondary font-bold'>${price}</td>
            <td>
                <label
                    onClick={() => setPayment(booking)}
                    htmlFor="payment-modal"
                    className='btn btn-sm btn-primary text-white rounded'
                >
                    Pay
                </label>
            </td>
        </tr>
    );
};

export default Booking;