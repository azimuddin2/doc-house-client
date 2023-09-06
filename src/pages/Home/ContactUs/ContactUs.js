import React from 'react';
import { HiOutlineLocationMarker, HiOutlinePhoneOutgoing } from 'react-icons/hi';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import ContactForm from './ContactForm';

const ContactUs = () => {
    return (
        <section className='max-w-screen-lg lg:mx-auto mx-5 mb-20'>
            <div className='bg-primary text-white p-20 rounded-lg'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    <div>
                        <h1 className='text-3xl font-semibold mb-5'>Contact With Us</h1>
                        <p className='text-sm'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi.</p>
                        <div className='mt-5'>
                            <p className='flex items-center mb-2'>
                                <HiOutlinePhoneOutgoing className='text-xl mr-2'></HiOutlinePhoneOutgoing>
                                <span>+000 1883 061967</span>
                            </p>
                            <p className='flex items-center mb-2'>
                                <MdOutlineMarkEmailUnread className='text-xl mr-2'></MdOutlineMarkEmailUnread>
                                <span>mohammadazimuddin274@gmail.coms</span>
                            </p>
                            <p className='flex items-center'>
                                <HiOutlineLocationMarker className='text-xl mr-2'></HiOutlineLocationMarker>
                                <span>Dhanmondi, Dhaka, Bangladesh</span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <ContactForm></ContactForm>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;