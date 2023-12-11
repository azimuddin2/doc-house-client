import React from 'react';
import { RiAdminLine, RiDeleteBin5Line } from 'react-icons/ri';
import { FaCircleUser } from "react-icons/fa6";
import swal from 'sweetalert';

const UserRow = ({ index, user, refetch }) => {
    const { image, name, email, role } = user;

    const handleMakeAdmin = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount) {
                    refetch();
                    swal({
                        icon: 'success',
                        title: `${user.email}`,
                        text: `${user.name} is an Admin Now!`,
                        timer: 6000,
                    })
                }
            })
    };

    return (
        <tr className='font-semibold'>
            <td>{index + 1}</td>

            <td>
                <div>
                    {
                        image ?
                            <div className="w-12 flex items-center rounded-full border">
                                <img src={image} alt='userImg' className='w-full rounded-full' />
                            </div>

                            :
                            <FaCircleUser className='text-4xl text-accent' />
                    }
                </div>
            </td>

            <td>
                {name}
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>

            <td>
                {
                    role === 'admin' ?
                        <span className='uppercase font-bold text-primary'>Admin</span>
                        :
                        <span className='tooltip' data-tip="Make Admin">
                            <RiAdminLine
                                onClick={() => handleMakeAdmin(user)}
                                className='text-2xl text-primary cursor-pointer'
                            />
                        </span>
                }
            </td>

            <td>
                <span className='tooltip' data-tip="Delete">
                    <RiDeleteBin5Line
                        // onClick={() => handleDelete(user)}
                        className='text-2xl text-secondary cursor-pointer'
                    />
                </span>
            </td>

        </tr>
    );
};

export default UserRow;