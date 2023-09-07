import React from 'react';
import frame from '../../../assets/Images/frame.png';
import frame1 from '../../../assets/Images/frame1.png';
import medicine from '../../../assets/Images/medicine.png';
import logo from '../../../assets/Images/dark-logo.png';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    return (
        <section className=''>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='bg-primary pb-20'>
                    <div className='flex justify-end'>
                        <img src={frame1} alt="" className='w-96' />
                    </div>
                    <div className='flex justify-center'>
                        <img src={medicine} alt="" className='h-20 absolute ml-48 mt-12' />
                        <img src={frame} alt="" className=' w-3/5' />
                    </div>
                </div>

                {/* Login Form */}
                <div className='m-24'>
                    <Link 
                    to="/"
                    className='flex justify-center mb-5'
                    >
                        <img src={logo} alt="Logo" style={{height: "48px"}}/>
                    </Link>
                    <div className="card border py-12">
                        <h1 className="text-4xl font-semibold text-center">Login</h1>
                        <form className="card-body px-4 md:px-10 lg:px-10">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-neutral text-lg">Email</span>
                                </label>
                                <input
                                    name='email'
                                    type="email"
                                    placeholder="Your email"
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
                                    // type={showPassword ? "text" : "password"}
                                    placeholder="Your password"
                                    className="input input-bordered focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                                    required
                                />
                                {/* <p className='m-12 login-show-password'
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {
                                    showPassword ?
                                        <FaEyeSlash className='text-gray-400'></FaEyeSlash>
                                        :
                                        <FaEye className='text-gray-400'></FaEye>
                                }
                            </p> */}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-secondary text-white">Login</button>
                            </div>
                        </form>
                        <p className='text-center text-base text-secondary'>New account? <Link to='/signup' className='text-primary font-semibold'>Sign Up</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Login;