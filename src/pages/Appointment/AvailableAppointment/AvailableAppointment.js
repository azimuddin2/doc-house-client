import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import Service from './Service';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointment = ({ date }) => {
    const [treatment, setTreatment] = useState(null);

    const url = 'http://localhost:5000/services';

    const { data: services, isLoading, refetch } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section className='max-w-screen-lg lg:mx-auto mx-5 mt-10 mb-20'>
            <h4 className='text-center text-secondary text-xl w-64 mx-auto lg:w-full'>Available Appointments on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {
                treatment && <BookingModal
                    treatment={treatment}
                    setTreatment={setTreatment}
                    date={date}
                    refetch={refetch}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointment;