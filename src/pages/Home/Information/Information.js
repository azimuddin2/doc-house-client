import React from 'react';
import clock from '../../../assets/Icons/clock.svg';
import marker from '../../../assets/Icons/marker.svg';
import phone from '../../../assets/Icons/phone.svg';
import InfoCard from './InfoCard';

const Information = () => {
    const information = [
        {
            id: 1,
            img: clock,
            title: 'Opening Hours',
            description: 'Open 9.00 am to 5.00 pm Everyday',
            bgColor: 'bg-primary'
        },
        {
            id: 2,
            img: marker,
            title: 'Our Location',
            description: 'Brooklyn, NY 10036, United States',
            bgColor: 'bg-secondary'
        },
        {
            id: 3,
            img: phone,
            title: 'Contact Us',
            description: '+000 1883 061967 +0001883 061967',
            bgColor: 'bg-primary'
        },
    ];

    return (
        <section className='max-w-screen-lg lg:mx-auto mx-5 mb-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    information.map(singleInfo => <InfoCard
                        key={singleInfo.id}
                        singleInfo={singleInfo}
                    ></InfoCard>)
                }
            </div>
        </section>
    );
};

export default Information;