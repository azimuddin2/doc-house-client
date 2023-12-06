import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Images/logo.png';
import CustomLink from './CustomLink';
import { LuLayoutDashboard } from "react-icons/lu";
import { LuCalendarClock } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";
import { TbMessageStar } from "react-icons/tb";
import useAuth from '../../../hooks/useAuth';
import './Navbar.css';
import swal from 'sweetalert';

const Navbar = () => {
    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => {
                swal({
                    title: "Oops...",
                    text: `${error.message}`,
                    icon: "error",
                    button: "Try again",
                });
            })
    };

    const navOptions = <>
        <li>
            <CustomLink to='/'>
                <IoHomeOutline className='text-lg lg:hidden' /> Home
            </CustomLink>
        </li>
        <li>
            <CustomLink to='/appointment'>
                <LuCalendarClock className='text-lg lg:hidden' /> Appointment
            </CustomLink>
        </li>
        <li>
            <CustomLink to='/reviews'>
                <TbMessageStar className='text-lg lg:hidden' />  Reviews
            </CustomLink>
        </li>
        <li>
            <CustomLink to='/dashboard'>
                <LuLayoutDashboard className='text-lg lg:hidden' /> Dashboard
            </CustomLink>
        </li>
        <li>
            {
                user?.uid ?
                    (
                        <button
                            onClick={handleLogout}
                            style={{ color: '#fff' }}
                            className='font-medium'
                        >
                            <FiLogIn className='text-lg lg:hidden' /> Logout
                        </button>
                    )
                    :
                    (
                        <CustomLink to='/login'>
                            <FiLogIn className='text-lg lg:hidden' /> Login
                        </CustomLink>
                    )
            }
        </li>
    </>

    return (
        <div className='bg-primary text-white py-1 px-2 lg:px-0'>
            <div className="navbar container mx-auto max-w-screen-lg">
                <div className="navbar-start">
                    <Link to="/">
                        <img className='w-full' style={{ height: "40px" }} src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex items-center">
                    <ul className="flex items-center menu menu-horizontal p-0 text-white">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end lg:hidden">
                    <div className="dropdown">
                        <label htmlFor='' tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul
                            tabIndex="0"
                            className="menu menu-compact dropdown-content mt-3 p-5 shadow  w-60 right-6 responsive-navbar"
                        >
                            {navOptions}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;