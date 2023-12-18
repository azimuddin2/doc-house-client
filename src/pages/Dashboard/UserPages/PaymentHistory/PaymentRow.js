import React from 'react';

const PaymentRow = ({ index, payment }) => {
    const { treatment, date, price, transactionId } = payment;

    return (
        <tr className='font-semibold'>
            <td>{index + 1}</td>
            <td>{treatment}</td>
            <td>{date}</td>
            <td className='font-bold text-primary'>${price}.00</td>
            <td>{transactionId}</td>
        </tr>
    );
};

export default PaymentRow;