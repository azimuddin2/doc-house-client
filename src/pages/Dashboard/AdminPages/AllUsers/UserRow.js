import React from 'react';
import { RiAdminLine, RiDeleteBin5Line } from 'react-icons/ri';
import swal from 'sweetalert';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const UserRow = ({ index, user, refetch }) => {
    const [axiosSecure] = useAxiosSecure();
    const { image, name, email, role } = user;

    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(result => {
                if (result.data.modifiedCount) {
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

    const handleDelete = (user) => {
        swal({
            title: "Are you sure?",
            text: `User account - ${user.email}`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axiosSecure.delete(`/users/${user._id}`)
                        .then(result => {
                            console.log(result);
                            if (result.data.deletedCount > 0) {
                                refetch();
                                swal({
                                    text: `${user.email} has been deleted!`,
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
                {
                    image ?
                        <div className="avatar">
                            <div className="rounded-full w-10 ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={image} alt={name} />
                            </div>
                        </div>
                        :
                        <div className="avatar placeholder">
                            <div className="bg-primary text-white rounded-full w-10 ring ring-secondary ring-offset-base-100 ring-offset-2">
                                <span className="text-2xl">{name.slice(0, 1)}</span>
                            </div>
                        </div>
                }
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
                        onClick={() => handleDelete(user)}
                        className='text-2xl text-secondary cursor-pointer'
                    />
                </span>
            </td>
        </tr>
    );
};

export default UserRow;