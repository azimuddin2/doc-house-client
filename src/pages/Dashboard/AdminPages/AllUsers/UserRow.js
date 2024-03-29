import React from 'react';
import { RiAdminLine, RiDeleteBin5Line } from 'react-icons/ri';
import swal from 'sweetalert';
import useAuth from '../../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const UserRow = ({ index, user, refetch }) => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const { image, name, email, role } = user;

    const handleMakeAdmin = (user) => {
        fetch(`https://doc-house-server-rust.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH',
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
                    fetch(`https://doc-house-server-rust.vercel.app/users/${user._id}`, {
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
                            console.log(result);
                            if (result.deletedCount > 0) {
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