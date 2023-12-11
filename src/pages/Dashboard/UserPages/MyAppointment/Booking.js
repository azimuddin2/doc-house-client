import React from 'react';

const Booking = ({ index, booking }) => {
    const { patientName, patientEmail, treatment, date, slot, price } = booking;

    return (
        <tr className='font-semibold'>
            <td>{index + 1}</td>

            <td>
                {patientName}
                {/* <br />
                <span className="badge badge-ghost badge-sm">{patientEmail}</span> */}
            </td>

            <td>{treatment}</td>

            <td>{date}</td>
            <td>{slot}</td>
            <td className='text-secondary font-bold'>${price}</td>

            <td>
                <button className='btn btn-sm btn-primary text-white rounded'>Pay</button>
            </td>

        </tr>
    );
};

export default Booking;