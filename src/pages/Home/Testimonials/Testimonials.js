import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/pagination';
import people1 from '../../../assets/Images/people1.png';
import people2 from '../../../assets/Images/people2.png';
import people3 from '../../../assets/Images/people3.png';
import people4 from '../../../assets/Images/people4.png';
import people5 from '../../../assets/Images/people5.png';
import Testimonial from './Testimonial';
import './Testimonials.css';

const Testimonials = () => {

    const testimonials = [
        {
            id: 1,
            image: people1,
            name: 'Awlad Hossain',
            location: 'Businessman',
            description: ''
        },
        {
            id: 2,
            image: people2,
            name: 'Miftahul Jannat',
            location: 'India'
        },
        {
            id: 3,
            image: people3,
            name: 'Tahiya Faiza',
            location: 'Bangladesh'
        },
        {
            id: 4,
            image: people4,
            name: 'Jhankar Mahbub',
            location: 'USA'
        },
        {
            id: 5,
            image: people5,
            name: 'Azim Uddin',
            location: 'Bangladesh'
        },
    ];

    return (
        <section className='max-w-screen-lg lg:mx-auto mx-5 my-20'>
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
                        spaceBetween: 12,
                    },
                    1024: {
                        width: 1024,
                        slidesPerView: 2,
                        spaceBetween: 12,

                    },
                }}
                modules={[A11y, Navigation, Autoplay]}
                spaceBetween={24}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
            >
                <div>
                    {
                        testimonials.map(testimonial => <SwiperSlide className='lg:px-2' key={testimonial._id}>
                            <Testimonial testimonial={testimonial}></Testimonial>
                        </SwiperSlide>)
                    }
                </div>
            </Swiper>
        </section>
    );
};

export default Testimonials;