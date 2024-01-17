import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import useTitle from '../../../../hooks/useTitle';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { IoRocketSharp } from 'react-icons/io5';
import { MdOutlineErrorOutline } from 'react-icons/md';
import StarRatings from 'react-star-ratings';
import Button from '../../../../components/Button/Button';
import Title from '../../../../components/Title/Title';
import { IoIosArrowDown } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const AddReview = () => {
    useTitle('Add Review');
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [countries, setCountries] = useState([]);
    const [rating, setRating] = useState(0);
    const navigate = useNavigate();

    const changeRating = (newRating, name) => {
        setRating(newRating);
    };

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const onSubmit = (data) => {
        const { name, location, description } = data;

        const reviewInfo = {
            rating,
            name,
            location,
            description,
            image: user?.photoURL || null
        };
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('access-token')}`
            },
            body: JSON.stringify(reviewInfo)
        })
            .then(res => res.json())
            .then(result => {
                if (result.data.insertedId) {
                    reset();
                    swal({
                        title: "Review added successfully",
                        icon: "success",
                        timer: 5000,
                    })
                    navigate('/reviews')
                }
            })
    };

    return (
        <div className='my-12'>
            <Title heading={'Sharing is Caring'} title={'Give a Review'}></Title>
            <div className='px-5 py-8 lg:p-12 w-11/12 lg:w-3/5 mx-auto bg-[#F1F5F9] rounded'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='text-center mb-6'>
                        <h2 className='text-xl uppercase font-medium mb-2'>Rate Us!</h2>
                        <StarRatings
                            rating={rating}
                            starRatedColor="#F2871D"
                            name="rating"
                            starSpacing="2px"
                            changeRating={changeRating}
                            starDimension="34px"
                            starHoverColor="#F2871D"
                        />
                    </div>
                    <div className='grid grid-cols-1 mb-5'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Name*</span>
                            </label>
                            <input
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required',
                                    }
                                })}
                                type='text'
                                defaultValue={user?.displayName}
                                placeholder="Enter Name"
                                className="input rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            />
                            <label className="label pt-1">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500 text-sm flex items-center"><MdOutlineErrorOutline className='text-lg' style={{ marginRight: '2px' }}></MdOutlineErrorOutline>{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className="form-control relative">
                            <label className="label" >
                                <span className="label-text font-semibold">Country*</span>
                            </label>
                            <select
                                {...register("location", {
                                    required: {
                                        value: true,
                                        message: 'Country is required',
                                    }
                                })}
                                type='text'
                                className="input rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            >
                                {
                                    countries?.map(country => <option
                                        key={country.cca3}
                                        country={country}
                                    >{country.name.common}</option>)
                                }
                            </select>
                            <IoIosArrowDown className='text-xl mr-3 absolute right-1 top-12' />
                            <label className="label pt-1">
                                {errors.location?.type === 'required' && <span className="label-text-alt text-red-500 text-sm flex items-center"><MdOutlineErrorOutline className='text-lg' style={{ marginRight: '2px' }}></MdOutlineErrorOutline>{errors.location.message}</span>}
                            </label>
                        </div>
                        <div className="form-control mt-3">
                            <label className="label">
                                <span className="label-text font-semibold">Review Message*</span>
                            </label>
                            <textarea
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: 'Review Message details is required'
                                    }
                                })}
                                className='textarea rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary'
                                placeholder='Review Message Details...'
                                type="text"
                                cols="10"
                                rows="5"
                            ></textarea>
                            <label className="label pt-1">
                                {errors.description?.type === 'required' && <span className="label-text-alt text-red-500 text-sm flex items-center"><MdOutlineErrorOutline className='text-lg' style={{ marginRight: '2px' }}></MdOutlineErrorOutline>{errors.description.message}</span>}
                            </label>
                        </div>
                    </div>
                    <Button>Send Review <IoRocketSharp className='text-xl' /></Button>
                </form>
            </div>
        </div>
    );
};

export default AddReview;