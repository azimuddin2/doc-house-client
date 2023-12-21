import React from 'react';
import { useForm } from 'react-hook-form';
import { MdOutlineErrorOutline } from 'react-icons/md';
import { IoIosArrowDown } from "react-icons/io";
import { BsCheck2Circle } from "react-icons/bs";
import uploadPhoto from '../../../../assets/Icons/upload-photo.svg';
import Title from '../../../../components/Title/Title';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const specialtys = [
        "Teeth Orthodontics",
        "Cavity Protection",
        "Teeth Cleaning",
        "Cosmetic Dentistry",
        "Oral Surgery",
        "Pediatric Dental"
    ];

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <section className='my-12'>
            <Title heading={'Welcome to Doc House'} title={'Add a new doctor'}></Title>
            <div className='px-5 py-8 lg:p-12 w-11/12 lg:w-1/2 mx-auto bg-[#F1F5F9]'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Name*</span>
                        </label>
                        <input
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is required',
                                }
                            })}
                            type='text'
                            placeholder="Enter the doctor's name"
                            className="input rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                        />
                        <label className="label pt-1">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500 text-sm flex items-center"><MdOutlineErrorOutline className='text-lg' style={{ marginRight: '2px' }}></MdOutlineErrorOutline>{errors.name.message}</span>}
                        </label>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Email*</span>
                        </label>
                        <input
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required',
                                }
                            })}
                            type='email'
                            placeholder="Enter the doctor's email"
                            className="input rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                        />
                        <label className="label pt-1">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500 text-sm flex items-center"><MdOutlineErrorOutline className='text-lg' style={{ marginRight: '2px' }}></MdOutlineErrorOutline>{errors.email.message}</span>}
                        </label>
                    </div>

                    <div className="form-control relative">
                        <label className="label" >
                            <span className="label-text font-bold">Specialty*</span>
                        </label>
                        <select
                            {...register("specialty")}
                            type='text'
                            className="input rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                        >
                            {
                                specialtys.map((specialty, index) => <option
                                    key={index}
                                    specialty={specialty}
                                >{specialty}</option>)
                            }
                        </select>
                        <IoIosArrowDown className='text-xl mr-3 absolute right-1 top-12' />
                    </div>

                    <div className="form-control w-full my-5">
                        <label
                            htmlFor='image'
                            className="input w-full h-28 cursor-pointer text-center pt-6 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                        >
                            <span className="label-text text-accent font-medium">Upload Photo</span>
                            <div className=' flex justify-center items-center'>
                                <img src={uploadPhoto} alt="uploadPhoto" className='mt-1' />
                            </div>
                        </label>
                        <input
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: 'Image is required',
                                },
                            })}
                            id="image"
                            type="file"
                            className="hidden"
                        />
                        <label className="label pt-1">
                            {errors.image?.type === 'required' && <span className="label-text-alt text-red-500 text-sm flex items-center"><MdOutlineErrorOutline className='text-lg' style={{ marginRight: '2px' }}></MdOutlineErrorOutline>{errors.image.message}</span>}
                        </label>
                    </div>

                    <button className='btn btn-primary text-white text-lg w-full'>Save <BsCheck2Circle className='text-xl' /></button>
                </form>
            </div>
        </section>
    );
};

export default AddDoctor;