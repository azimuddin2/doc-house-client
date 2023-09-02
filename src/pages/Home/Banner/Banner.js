import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Shared/Button/Button';
import dotsGroup from '../../../assets/Images/dots-group.png';
import ellipse from '../../../assets/Images/Ellipse.png';
import medicine from '../../../assets/Images/medicine.png';
import medicine1 from '../../../assets/Images/medicine1.png';
import medicine2 from '../../../assets/Images/medicine2.png';
import doctor1 from '../../../assets/Images/doctor1.png';
import doctor2 from '../../../assets/Images/doctor2.png';
import doctor3 from '../../../assets/Images/doctor3.png';

const Banner = () => {
    return (
        <section className='bg-primary pb-28'>
            <div className="hero min-h-full max-w-screen-lg mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='mt-32 flex'>
                        <img src={medicine} className='w-40 h-40 absolute top-36' style={{marginLeft: '-70px'}} alt="" />
                        <img src={ellipse} className='w-56 h-56 absolute ml-32 top-28' alt="" />
                        <img src={dotsGroup} className='w-24 h-24 mt-20 mr-14' alt="" />
                        <img src={doctor1} className="w-44 h-44 relative right-28 bottom-10" alt='' />
                        <img src={doctor3} className="w-44 h-44 absolute mt-16 ml-32" alt='' />
                        <img src={doctor2} className="w-44 h-44 relative right-28 bottom-20" alt='' />
                    </div>
                    <div className='mt-4 lg:mt-28 flex-1'>
                        <img className='w-36 h-36 absolute top-0 left-0' src={medicine2} alt="" />
                        <img className='w-10 h-20 absolute left-96 top-96' src={medicine1} alt="" />
                        <h1 className="text-3xl md:text-5xl lg:text-5xl font-semibold text-white">Your Best Medical <br /> Help Center</h1>
                        <p style={{ color: '#F3F3F3' }} className="py-4 lg:py-6 text-sm"> The online tool helps you to keep track of your health care provider visits, test results, billing, prescriptions, and so on. You can also e-mail your provider questions through the portal.</p>
                        <Link to='/appointment'>
                            <Button>All Service</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;