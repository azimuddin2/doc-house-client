import React, { useContext, useState } from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import { AuthContext } from '../../../providers/AuthProvider';
import { toast } from 'react-toastify';
import frame from '../../../assets/Images/frame.png';
import frame1 from '../../../assets/Images/frame1.png';
import medicine from '../../../assets/Images/medicine.png';
import medicine2 from '../../../assets/Images/medicine2.png';
import logo from '../../../assets/Images/dark-logo.png';
import './SignUp.css';

const SignUp = () => {
    useTitle('SignUp')
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                handleUpdateUserProfile(name);
                form.reset();
                toast.success(`${user?.email} User SignUp Successfully!!`)
                navigate(from, { replace: true });
            })
            .catch((error) => {
                toast.error(error.message);
            })
    };

    const handleUpdateUserProfile = (name) => {
        const profile = {
            displayName: name,
        };
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => {
                toast.error(error.message);
            })
    };

    return (
        <section className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='bg-primary pb-14'>
                <div className='flex justify-end'>
                    <img src={medicine2} alt="medicine" className='h-20 lg:h-32 absolute left-0' />
                    <img src={frame1} alt="frame" className='w-60 lg:w-96 animate-pulse' />
                </div>
                <div className='flex justify-center'>
                    <img src={medicine} alt="medicine" className='h-20 absolute ml-40 lg:ml-48 mt-4 lg:mt-12 animate-bounce' />
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
                    <form
                        onSubmit={handleSubmit}
                        className="card-body px-4 md:px-10 lg:px-10 pb-0"
                    >
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