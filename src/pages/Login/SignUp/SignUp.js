import React, { useState } from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import frame from '../../../assets/Images/frame.png';
import frame1 from '../../../assets/Images/frame1.png';
import medicine from '../../../assets/Images/medicine.png';
import medicine2 from '../../../assets/Images/medicine2.png';
import logo from '../../../assets/Images/dark-logo.png';
import './SignUp.css';
import useTitle from '../../../hooks/useTitle';

const SignUp = () => {
    useTitle('SignUp')
    const [showPassword, setShowPassword] = useState(false);

    return (
        <section className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='bg-primary pb-14'>
                <div className='flex justify-end'>
                    <img src={medicine2} alt="medicine" className='h-20 lg:h-32 absolute left-0' />
                    <img src={frame1} alt="frame" className='w-60 lg:w-96' />
                </div>
                <div className='flex justify-center'>
                    <img src={medicine} alt="medicine" className='h-20 absolute ml-40 lg:ml-48 mt-4 lg:mt-12' />
                    <img src={frame} alt="frame" className='w-3/4 lg:w-3/5' />
                </div>
            </div>

            {/* SignUp Form */}
            <div className='my-12 w-11/12 lg:w-3/4 mx-auto'>
                <Link
                    to="/"
                    className='flex justify-center mb-5'
                >
                    <img src={logo} alt="Logo" style={{ height: "44px" }} />
                </Link>
                <div className="card border py-10">
                    <h1 className="text-4xl font-semibold text-center">SignUp</h1>
                    <form className="card-body px-4 md:px-10 lg:px-10 pb-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-neutral text-lg">Name</span>
                            </label>
                            <input
                                name='name'
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-neutral text-lg">Email</span>
                            </label>
                            <input
                                name='email'
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-neutral text-lg">Password</span>
                            </label>
                            <input
                                name='password'
                                type={showPassword ? "text" : "password"}
                                placeholder="Your Password"
                                className="input input-bordered focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                                required
                            />
                            <p
                                className='sign-show-password'
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {
                                    showPassword ?
                                        <FaEyeSlash className='text-gray-500'></FaEyeSlash>
                                        :
                                        <FaEye className='text-gray-400'></FaEye>
                                }
                            </p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-secondary text-white">SignUp</button>
                        </div>
                    </form>
                    <p className='text-center text-base text-accent font-medium py-3'>Already Have an Account? <Link to='/login' className='text-secondary font-semibold underline'>Login</Link></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </section >
    );
};

export default SignUp;