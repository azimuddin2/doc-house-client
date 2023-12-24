import React from 'react';
import { GoCheckCircleFill } from 'react-icons/go';
import { MdAutoDelete } from 'react-icons/md';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import swal from 'sweetalert';

const AppointmentRow = ({ index, appointment, refetch }) => {
    const [axiosSecure] = useAxiosSecure();
    const { patientName, patientEmail, treatment, date, slot, price, paid } = appointment;

    const handleDelete = (appointment) => {
        swal({
            title: "Are you sure?",
            text: `Appointment - ${appointment.treatment}`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axiosSecure.delete(`/booking/${appointment._id}`)
                        .then(result => {
                            if (result.data.deletedCount > 0) {
                                refetch();
                                swal({
                                    text: `Appointment ${appointment.treatment} has been deleted!`,
                                    icon: "success",
                                    timer: 6000,
                                });
                            }
                        })
                }
            });
    };

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
                            <span>
                                <MdAutoDelete
                                    onClick={() => handleDelete(appointment)}
                                    className='text-2xl text-secondary ml-1 cursor-pointer'
                                />
                            </span>
                        </>
                }
            </td>
        </tr>
    );
};

export default AppointmentRow;