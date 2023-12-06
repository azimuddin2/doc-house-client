import React from 'react';
import PageCover from '../../components/PageCover/PageCover';
import useTitle from '../../hooks/useTitle';
import useReviews from '../../hooks/useReviews';
import Loading from '../Shared/Loading/Loading';
import ErrorElement from '../Shared/ErrorElement/ErrorElement';
import Review from './Review';

const Reviews = () => {
    useTitle('Reviews');
    const [reviews, isLoading, error] = useReviews();

    if (isLoading) {
        return <Loading></Loading>
    }

    if (error) {
        return <ErrorElement message={error.message}></ErrorElement>
    }

    return (
        <section>
            <PageCover title={'Reviews'}></PageCover>
            <div className='max-w-screen-lg lg:mx-auto mx-5 my-10 lg:my-16'>
                <div className='text-center'>
                    <h1 className='font-bold text-3xl lg:text-4xl leading-snug text-neutral'>What Our Patients Says</h1>
                    <p className='lg:w-3/5 mx-auto text-accent leading-6 mt-3 capitalize text-sm'>The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words Which Don't Look Even Slightly Believable.</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6 lg:mt-10'>
                    {
                        reviews?.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Reviews;