import React from 'react';
import medicine3 from '../../assets/Images/medicine3.png';
import medicine from '../../assets/Images/medicine.png';
import frame from '../../assets/Images/frame1.png';

const PageCover = ({ subTitle, title }) => {
    return (
        <section className='bg-primary'>
            <div className='max-w-screen-lg lg:mx-auto mx-5'>
                <div className='lg:absolute pt-10 lg:text-left text-center'>
                    <h3 className=' text-sm text-white'>Home/{subTitle}</h3>
                    <h1 className='text-white text-3xl font-semibold'>{title}</h1>
                </div>
                <img src={medicine3} alt="medicine" className='h-24 lg:h-48 lg:pt-16' />
            </div>
            <img src={frame} alt="frame" className='animate-pulse h-36 absolute top-20 lg:right-40 hidden lg:block' />
            <img src={medicine} alt="medicine" className='animate-pulse h-36 absolute top-14 right-10' />
        </section>
    );
};

export default PageCover;