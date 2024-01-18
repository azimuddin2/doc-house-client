import React from 'react';
import useTitle from '../../../../hooks/useTitle';
import { HiOutlineDocumentChartBar, HiOutlineUserGroup, HiOutlineUsers } from "react-icons/hi2";
import CountUp from 'react-countup';
import ProgressBar from "@ramonak/react-progress-bar";
import { useQuery } from '@tanstack/react-query';
import ErrorElement from '../../../Shared/ErrorElement/ErrorElement';
import Loading from '../../../Shared/Loading/Loading';
import DashboardCharts from './DashboardCharts';

const AdminHome = () => {
    useTitle('Dashboard');

    const { data: stats = {}, isLoading, error } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/admin-stats', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('access-token')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    const { doctors, patients, appointments } = stats;

    if (isLoading) {
        return <Loading></Loading>
    }

    if (error) {
        return <ErrorElement message={error.message}></ErrorElement>
    }

    return (
        <div className='bg-[#F1F5F9] h-full px-5 py-12  lg:p-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className='bg-white p-8 rounded-lg'>
                    <div className='flex items-center'>
                        <span className='h-16 w-16 flex justify-center items-center rounded-lg' style={{ background: 'rgba(255, 0, 52, 0.10)' }}>
                            <HiOutlineUsers className='text-4xl text-secondary' />
                        </span>
                        <p className='text-5xl text-accent font-semibold ml-5'>
                            <CountUp end={doctors} duration={5} />
                        </p>
                    </div>
                    <div className='mt-5'>
                        <ProgressBar
                            completed={doctors}
                            bgColor="#F7A582"
                            height='10px'
                            labelSize='10px'
                        />
                        <p className='text-lg font-medium mt-2'>Doctors</p>
                    </div>
                </div>
                <div className='bg-white p-8 rounded-lg'>
                    <div className='flex items-center'>
                        <span className='h-16 w-16 flex justify-center items-center rounded-lg' style={{ background: 'rgba(123, 177, 60, 0.10)', color: '#7BB13C' }}>
                            <HiOutlineUserGroup className='text-4xl' />
                        </span>
                        <p className='text-5xl text-accent font-semibold ml-5'>
                            <CountUp end={patients} duration={5} />
                        </p>
                    </div>
                    <div className='mt-5'>
                        <ProgressBar
                            completed={patients}
                            bgColor="#7BB13C"
                            height='10px'
                            labelSize='10px'
                        />
                        <p className='text-lg font-medium mt-2'>Patients</p>
                    </div>
                </div>
                <div className='bg-white p-8 rounded-lg'>
                    <div className='flex items-center'>
                        <span className='h-16 w-16 flex justify-center items-center rounded-lg' style={{ background: 'rgba(255, 188, 52, 0.10)', color: '#FFBC34' }}>
                            <HiOutlineDocumentChartBar className='text-4xl' />
                        </span>
                        <p className='text-5xl text-accent font-semibold ml-5'>
                            <CountUp end={appointments} duration={5} />
                        </p>
                    </div>
                    <div className='mt-5'>
                        <ProgressBar
                            completed={appointments}
                            bgColor="#FFBC34"
                            height='10px'
                            labelSize='10px'
                        />
                        <p className='text-lg font-medium mt-2'>Appointments</p>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <DashboardCharts></DashboardCharts>
            </div>
        </div>
    );
};

export default AdminHome;