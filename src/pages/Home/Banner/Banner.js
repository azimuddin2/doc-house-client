import React from 'react';
import { Link } from 'react-router-dom';
import dotsGroup from '../../../assets/Images/dots-group.png';
import ellipse from '../../../assets/Images/Ellipse.png';
import medicine from '../../../assets/Images/medicine.png';
import medicine1 from '../../../assets/Images/medicine1.png';
import medicine2 from '../../../assets/Images/medicine2.png';
import doctor1 from '../../../assets/Images/doctor1.png';
import doctor2 from '../../../assets/Images/doctor2.png';
import doctor3 from '../../../assets/Images/doctor3.png';
import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
    return (
        <section className='bg-primary pb-10 lg:pb-28'>
            <div className="hero min-h-full max-w-screen-lg mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='mt-32 flex'>
                        <img src={medicine} className='w-40 h-40 absolute top-40' style={{ marginLeft: '-64px' }} alt="Medicine" />
                        <img src={ellipse} className='w-48 h-48 lg:w-56 lg:h-56 absolute ml-28 top-24 lg:ml-32 lg:top-28' alt="Ellipse" />
                        <img src={dotsGroup} className='w-24 h-24 mt-20 mr-14' alt="Dot Group" />
                        <img src={doctor1} className="w-36 h-36 lg:w-44 lg:h-44 relative right-28 bottom-10" alt='Doctor' />
                        <img src={doctor3} className="w-36 h-36 lg:w-44 lg:h-44 absolute mt-12 lg:mt-16 ml-28 lg:ml-32" alt='Doctor' />
                        <img src={doctor2} className="w-36 h-36 lg:w-44 lg:h-44 relative right-28 bottom-20" alt='Doctor' />
                    </div>
                    <div className='mt-10 lg:mt-28 flex-1 text-center lg:text-left'>
                        <img className='w-36 h-36 absolute top-0 left-0 hidden lg:block' src={medicine2} alt="Medicine" />
                        <img className='w-10 h-20 absolute lg:left-96 top-2/3 left-72' src={medicine1} alt="Medicine" />
                        <h1 className="text-3xl md:text-5xl lg:text-5xl font-medium text-white">Your Best Medical <br /> Help Center</h1>
                        <p style={{ color: '#F3F3F3' }} className="py-4 lg:py-8 text-sm "> The online website helps you to keep track of your health care provider visits, test results, billing, prescriptions, and so on. You can also e-mail your provider questions through the doc house.</p>
                        <Link to='/appointment'>
                            <button className='btn btn-secondary text-white capitalize'>
                                All Service <FaArrowRight className='text-lg' />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;