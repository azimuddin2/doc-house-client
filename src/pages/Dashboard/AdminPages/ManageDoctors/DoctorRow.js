import React from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';

const DoctorRow = ({ index, doctor, refetch }) => {
    const { image, name, email, specialty } = doctor;

    const handleDelete = () => {

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