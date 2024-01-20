import React from 'react';
import error404 from '../../../assets/Images/error.gif';
import { Link } from 'react-router-dom';
import { IoHomeOutline } from 'react-icons/io5';

const ErrorPage = () => {
    return (
        <div className='text-center my-10'>
            <h1 className='text-4xl text-primary font-semibold'>Sorray</h1>
            <h2 className='text-accent text-xl capitalize mt-1'>This page is not found.</h2>
            <img src={error404} alt="Error404" className='mx-auto'/>
            <Link to={'/'}>
                <button className='btn btn-secondary text-white font-semibold'>
                    <IoHomeOutline className='text-lg' />
                    Back to Home
                </button>
            </Link>
        </div>
    );
};

export default ErrorPage;