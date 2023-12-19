import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import ActiveLink from '../components/ActiveLink/ActiveLink';
import { FaUserDoctor, FaUsersGear } from 'react-icons/fa6';
import { MdHistory, MdManageHistory, MdOutlineRateReview } from 'react-icons/md';
import { HiOutlineDocumentChartBar } from 'react-icons/hi2';
import { TbMessageStar } from 'react-icons/tb';
import { LuCalendarClock, LuLayoutDashboard } from 'react-icons/lu';
import { AiOutlineHome } from "react-icons/ai";
import DashboardNavbar from '../pages/Shared/DashboardNavbar/DashboardNavbar';
import logo from '../assets/Images/dark-logo.png';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [isAdmin] = useAdmin();

    return (
        <div>
            <DashboardNavbar></DashboardNavbar>
            <div className="drawer block lg:grid lg:drawer-open mx-auto max-w-screen-2xl">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 h-full w-64 lg:bg-inherit bg-base-100 text-base-content">
                        <Link to='/'>
                            <img src={logo} alt="Logo" className='mx-6 mb-5 lg:hidden' style={{ height: '40px' }} />
                        </Link>
                        {
                            isAdmin ?
                                <>
                                    <li>
                                        <ActiveLink to='/dashboard'>
                                            <LuLayoutDashboard className='text-xl' />
                                            <span>Dashboard</span>
                                        </ActiveLink>
                                    </li>
                                    <li>
                                        <ActiveLink to='/dashboard/all-users'>
                                            <FaUsersGear className='text-xl' />
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
                                            <MdManageHistory className='text-xl' />
                                            <span>Manage Doctors</span>
                                        </ActiveLink>
                                    </li>
                                    <li>
                                        <ActiveLink to='/dashboard/all-appointments'>
                                            <HiOutlineDocumentChartBar className='text-2xl' />
                                            <span>All Appointments</span>
                                        </ActiveLink>
                                    </li>
                                </>
                                :
                                <>
                                    <li>
                                        <ActiveLink to='/dashboard/my-appointment'>
                                            <HiOutlineDocumentChartBar className='text-xl' />
                                            <span>My Appointment</span>
                                        </ActiveLink>
                                    </li>
                                    <li>
                                        <ActiveLink to='/dashboard/add-review'>
                                            <MdOutlineRateReview className='text-xl' />
                                            <span>Add Review</span>
                                        </ActiveLink>
                                    </li>
                                    <li>
                                        <ActiveLink to='/dashboard/payment-history'>
                                            <MdHistory className='text-xl' />
                                            <span>Payment History</span>
                                        </ActiveLink>
                                    </li>
                                </>
                        }
                        <div className="divider divide-white"></div>
                        <li>
                            <ActiveLink to='/'>
                                <AiOutlineHome className='text-xl' />
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