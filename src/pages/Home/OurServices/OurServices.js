import React from 'react';
import doctor from '../../../assets/Images/doctor.png';

const OurServices = () => {
    return (
        <section className='max-w-screen-lg mx-auto my-20'>
            <div className=' grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <div>
                    <img src={doctor} alt="Doctor" className='w-full' />
                </div>
                <div>
                    <h2 className=' text-4xl text-neutral font-bold'>Our Services</h2>
                    <p className='my-5 text-sm text-accent'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </div>
            </div>
        </section>
    );
};

export default OurServices;