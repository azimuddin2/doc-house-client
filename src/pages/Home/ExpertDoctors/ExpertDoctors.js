import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';
import ExpertDoctor from './ExpertDoctor';
import ErrorElement from '../../Shared/ErrorElement/ErrorElement';

const ExpertDoctors = () => {

    const { data: expertDoctors = [], isLoading, error } = useQuery({
        queryKey: ['expert-doctors'],
        queryFn: async () => {
            const res = await fetch('https://doc-house-server-rust.vercel.app/expert-doctors');
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    if (error) {
        return <ErrorElement message={error.message}></ErrorElement>
    }

    return (
        <section className='max-w-screen-lg lg:mx-auto mx-5'>
            <div className='text-center mb-8'>
                <h1 className='font-bold text-3xl lg:text-4xl leading-snug text-neutral'>Our Expert Doctors</h1>
                <p className='lg:w-3/4 mx-auto text-accent leading-6 mt-3 capitalize text-sm'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    expertDoctors?.map(expertDoctor => <ExpertDoctor
                        key={expertDoctor._id}
                        expertDoctor={expertDoctor}
                    ></ExpertDoctor>)
                }
            </div>
        </section>
    );
};

export default ExpertDoctors;