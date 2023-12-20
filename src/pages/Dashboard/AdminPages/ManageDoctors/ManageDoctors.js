import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import ErrorElement from '../../../Shared/ErrorElement/ErrorElement';
import Loading from '../../../Shared/Loading/Loading';
import DoctorRow from './DoctorRow';

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
    );
};

export default ManageDoctors;