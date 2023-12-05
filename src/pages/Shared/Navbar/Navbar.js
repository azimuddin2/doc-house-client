import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Images/logo.png';
import CustomLink from './CustomLink';
import './Navbar.css';
import { AuthContext } from '../../../providers/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => {
                toast.error(error.message);
            })
    };

    const menuItem = <>
        <li><CustomLink to='/'>Home</CustomLink></li>
        <li><CustomLink to='/about'>About</CustomLink></li>
        <li><CustomLink to='/appointment'>Appointment</CustomLink></li>
        <li><CustomLink to='/dashboard'>Dashboard</CustomLink></li>
        <li>
            {
                user?.uid ?
                    <button
                        onClick={handleLogout}
                        style={{ backgroundColor: '#F7A582', color: '#fff' }}
                        className='btn btn-sm bg-secondary capitalize border-none px-5 rounded-sm group-hover:opacity-100 lg:ml-3 lg:mt-0 mt-2'
                    >
                        Logout
                    </button>
                    :
                    <CustomLink to='/login'>Login</CustomLink>
            }
        </li>
    </>

    return (
        <div className='bg-primary text-white lg:py-1'>
            <div className="navbar container mx-auto max-w-screen-lg">

                <div className="navbar-start">
                    <Link to="/">
                        <img className='w-full' style={{ height: "40px" }} src={logo} alt="Logo" />
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex items-center">
                    <ul className="flex items-center menu menu-horizontal p-0 text-white">
                        {menuItem}
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
                            {menuItem}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;