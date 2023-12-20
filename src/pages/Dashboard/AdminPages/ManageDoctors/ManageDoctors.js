import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import ErrorElement from '../../../Shared/ErrorElement/ErrorElement';
import Loading from '../../../Shared/Loading/Loading';
import DoctorRow from './DoctorRow';
import doctorsGif from '../../../../assets/Images/doctors.gif';
import { Link } from 'react-router-dom';
import { FiArrowRightCircle } from 'react-icons/fi';

const ManageDoctors = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: doctors = [], isLoading, error, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await axiosSecure.get('/doctors')
            return res.data;
        }
    })

    if (error) {
        return <ErrorElement message={error.message}></ErrorElement>
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <>
            {
                doctors.length > 0 ?
                    (
                        <div className='bg-[#F1F5F9] h-full py-16'>
                            <div className='w-11/12 lg:w-3/4 mx-auto bg-white p-5 lg:p-10'>
                                <div className='mb-4'>
                                    <h2 className='text-xl lg:text-2xl font-semibold text-primary'>Manage All Doctors: 0{doctors.length}</h2>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="table">
                                        <thead className='bg-[#E6E6E6] text-primary uppercase'>
                                            <tr>
                                                <th></th>
                                                <th>Avatar</th>
                                                <th>Name & Email</th>
                                                <th>Job</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                doctors?.map((doctor, index) => <DoctorRow
                                                    key={doctor._id}
                                                    index={index}
                                                    doctor={doctor}
                                                    refetch={refetch}
                                                ></DoctorRow>)
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )
                    :
                    (
                        <div className='w-11/12 lg:w-4/5 mx-auto my-20 lg:my-0'>
                            <img src={doctorsGif} alt="appointment" className='mx-auto' />
                            <Link to={'/dashboard/add-doctor'} className='flex justify-center'>
                                <button className='btn btn-primary btn-sm capitalize text-white'>
                                    Please Add New Doctor
                                    <FiArrowRightCircle className='text-lg' />
                                </button>
                            </Link>
                        </div>
                    )
            }
        </>
    );
};

export default ManageDoctors;