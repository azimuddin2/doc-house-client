import React from 'react';
import { GoCheckCircleFill } from 'react-icons/go';

const AppointmentRow = ({ index, appointment }) => {
    const { patientName, patientEmail, treatment, date, slot, price, paid, transactionId } = appointment;

    return (
        <tr className='font-semibold'>
            <td>{index + 1}</td>

            <td>
                {patientName}
                <br />
                <span className="badge badge-ghost badge-sm">{patientEmail}</span>
            </td>

            <td>{treatment}</td>

            <td>
                {date}
                <br />
                <span className="badge badge-ghost badge-sm">{slot}</span>
            </td>

            <td className='text-primary font-bold'>${price}</td>



            <td className='flex items-center'>
                {
                    paid === true ?
                        <>
                            <GoCheckCircleFill className='text-xl text-green-600 mr-1'></GoCheckCircleFill>
                            <span className='capitalize text-green-600'>Success</span>
                        </>
                        :
                        <>
                            <span className="loading loading-spinner loading-xs mr-1 text-secondary"></span>
                            <span className='capitalize text-secondary'>Pending</span>
                        </>
                }
            </td>



        </tr>
    );
};

export default AppointmentRow;