import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import ActiveLink from '../components/ActiveLink/ActiveLink';
import { FaHome, FaUsers } from 'react-icons/fa';
import { FaUserDoctor } from 'react-icons/fa6';
import { MdDashboard, MdDashboardCustomize, MdManageAccounts, MdRateReview } from 'react-icons/md';
import { HiDocumentChartBar } from 'react-icons/hi2';
import { TbMessageStar } from 'react-icons/tb';
import { LuCalendarClock } from 'react-icons/lu';
import { IoHomeOutline } from 'react-icons/io5';
import DashboardNavbar from '../pages/Shared/DashboardNavbar/DashboardNavbar';
import logo from '../assets/Images/dark-logo.png';

const Dashboard = () => {
    const isAdmin = 'mohammadazimuddin274@gmail.com';  // TODO: server side data load

    return (
        <div>
            <DashboardNavbar></DashboardNavbar>
            <div className="drawer block lg:grid lg:drawer-open mx-auto max-w-screen-xl">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side ">
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 h-full w-72 lg:bg-inherit bg-base-100 text-base-content">
                        <Link to='/'>
                            <img src={logo} alt="Logo" className='mx-6 mb-5 lg:hidden' style={{ height: '44px' }} />
                        </Link>
                        {
                            isAdmin ?
                                <>

                                    <li>
                                        <ActiveLink to='/dashboard'>
                                            <MdDashboard className='text-xl' />
                                            <span>Dashboard</span>
                                        </ActiveLink>
                                    </li>

                                    <li>
                                        <ActiveLink to='/dashboard/all-users'>
                                            <FaUsers className='text-xl' />
                                            <span>All Users</span>
                                        </ActiveLink>
                                    </li>

                                    <li>
                                        <ActiveLink to='/dashboard/add-doctor'>
                                            <FaUserDoctor className='text-xl' />
                                            <span>Add a Doctor</span>
                                        </ActiveLink>
                                    </li>

                                    <li>
                                        <ActiveLink to='/dashboard/manage-doctors'>
                                            <MdManageAccounts className='text-2xl' />
                                            <span>Manage Doctors</span>
                                        </ActiveLink>
                                    </li>

                                    <li>
                                        <ActiveLink to='/dashboard/manage-appointment'>
                                            <HiDocumentChartBar className='text-xl' />
                                            <span>Manage Appointments</span>
                                        </ActiveLink>
                                    </li>

                                </>
                                :
                                <>
                                    <li>
                                        <ActiveLink to='/dashboard/my-appointment'>
                                            <HiDocumentChartBar className='text-xl' />
                                            <span>My Appointment</span>
                                        </ActiveLink>
                                    </li>
                                    <li>
                                        <ActiveLink to='/dashboard/add-review'>
                                            <MdRateReview className='text-xl' />
                                            <span>Add Review</span>
                                        </ActiveLink>
                                    </li>
                                </>
                        }



                        <div className="divider divide-white"></div>

                        <li>
                            <ActiveLink to='/'>
                                <IoHomeOutline className='text-xl' />
                                <span>Home</span>
                            </ActiveLink>
                        </li>

                        <li>
                            <ActiveLink to='/appointment'>
                                <LuCalendarClock className='text-xl' />
                                <span>Appointment</span>
                            </ActiveLink>
                        </li>

                        <li>
                            <ActiveLink to='/reviews'>
                                <TbMessageStar className='text-xl' />
                                <span>Reviews</span>
                            </ActiveLink>
                        </li>



                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;