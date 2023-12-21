import React from 'react';
import { useForm } from 'react-hook-form';
import { MdOutlineErrorOutline } from 'react-icons/md';

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

    const onSubmit = () => {

    };

    return (
        <section className='my-10'>
            <div className='px-5 py-8 lg:p-12 w-11/12 lg:w-1/2 mx-auto bg-[#F1F5F9]'>

                <form onSubmit={handleSubmit(onSubmit)}>

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
                            placeholder="Enter the doctor's name"
                            className="input rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                        />
                        <label className="label pt-1">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500 text-sm flex items-center"><MdOutlineErrorOutline className='text-lg' style={{ marginRight: '2px' }}></MdOutlineErrorOutline>{errors.name.message}</span>}
                        </label>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email*</span>
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

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Specialty*</span>
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
                    </div>


                </form>
            </div>
        </section>
    );
};

export default AddDoctor;