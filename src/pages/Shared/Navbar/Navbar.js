import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Images/logo.png';

const Navbar = () => {

    const menuItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/appointment'>Appointment</Link></li>
        <li><Link to='/login'>Login</Link></li>
    </>

    return (
        <div className='bg-primary text-white'>
            <div className="navbar container mx-auto max-w-screen-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-56">
                            {menuItem}
                        </ul>
                    </div>
                    <Link to="/">
                        <img style={{height: "40px"}} src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex items-center">
                    <ul className="menu menu-horizontal p-0 text-white">
                        {menuItem}
                    </ul>
                </div>
                {/* <div className="navbar-end lg:hidden">
                    <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;