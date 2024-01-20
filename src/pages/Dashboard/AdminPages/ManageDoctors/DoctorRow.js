import React from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import swal from 'sweetalert';
import useAuth from '../../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const DoctorRow = ({ index, doctor, refetch }) => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const { image, name, email, specialty } = doctor;

    const handleDelete = (doctor) => {
        swal({
            title: "Are you sure?",
            text: `Doctor Name - ${doctor.name}`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://doc-house-server-rust.vercel.app/doctors/${doctor._id}`, {
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
                                    text: `${doctor.name} has been deleted!`,
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
                <div className="avatar">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 flex items-center">
                        <img src={image} alt={name} />
                    </div>
                </div>
            </td>
            <td>
                {name}
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>{specialty}</td>
            <td>
                <span className='tooltip' data-tip="Delete">
                    <RiDeleteBin5Line
                        onClick={() => handleDelete(doctor)}
                        className='text-2xl text-secondary cursor-pointer'
                    />
                </span>
            </td>
        </tr>
    );
};

export default DoctorRow;