import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/pagination';
import Testimonial from './Testimonial';
import './Testimonials.css';
import useReviews from '../../../hooks/useReviews';
import Loading from '../../Shared/Loading/Loading';
import ErrorElement from '../../Shared/ErrorElement/ErrorElement';

const Testimonials = () => {
    const [reviews, isLoading, error] = useReviews();

    if (isLoading) {
        return <Loading></Loading>
    }

    if (error) {
        return <ErrorElement></ErrorElement>
    }

    return (
        <section className='max-w-screen-lg lg:mx-auto mx-5 my-10 lg:my-20'>
            <div className='text-center'>
                <h1 className='font-bold text-3xl lg:text-4xl leading-snug text-neutral'>What Our Patients Says</h1>
                <p className='lg:w-3/5 mx-auto text-accent leading-6 mt-3 capitalize text-sm'>The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words Which Don't Look Even Slightly Believable.</p>
            </div>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-navigation-size": "18px",
                }}
                className="mySwiper"
                breakpoints={{
                    576: {
                        width: 576,
                        slidesPerView: 1,
                    },
                    768: {
                        width: 768,
                        slidesPerView: 2,
                    },
                    1024: {
                        width: 1024,
                        slidesPerView: 2,

                    },
                }}
                modules={[A11y, Navigation, Autoplay]}
                spaceBetween={0}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
            >
                <div>
                    {
                        reviews?.map(testimonial => <SwiperSlide className='lg:px-2' key={testimonial._id}>
                            <Testimonial testimonial={testimonial}></Testimonial>
                        </SwiperSlide>)
                    }
                </div>
            </Swiper>
        </section>
    );
};

export default Testimonials;