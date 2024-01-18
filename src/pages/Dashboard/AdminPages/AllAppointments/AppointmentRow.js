import React from 'react';
import { GoCheckCircleFill } from 'react-icons/go';
import { MdAutoDelete } from 'react-icons/md';
import swal from 'sweetalert';
import useAuth from '../../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const AppointmentRow = ({ index, appointment, refetch }) => {
    const { logout } = useAuth();
    const navigate = useNavigate();

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
                    fetch(`http://localhost:5000/booking/${appointment._id}`, {
                        method: 'DELETE',
                        headers: {
                            authorization: `bearer ${localStorage.getItem('access-token')}`
                        }
                    })
                        .then(res => {
                            if (res.status === 401 || res.status === 403) {
                                logout();
                                localStorage.removeItem('access-token');
                                navigate('/login');
                            }
                            return res.json()
                        })
                        .then(result => {
                            if (result.deletedCount > 0) {
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