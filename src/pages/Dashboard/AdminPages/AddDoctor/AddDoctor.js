import React from 'react';
import { useForm } from 'react-hook-form';
import { MdOutlineErrorOutline } from 'react-icons/md';
import { BsCheck2Circle } from "react-icons/bs";
import uploadPhoto from '../../../../assets/Icons/upload-photo.svg';
import Title from '../../../../components/Title/Title';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../../../hooks/useTitle';
import useAuth from '../../../../hooks/useAuth';

const AddDoctor = () => {
    useTitle('Add Doctor');
    const { logout } = useAuth();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();

    const specialtys = [
        "Teeth Orthodontics",
        "Cavity Protection",
        "Teeth Cleaning",
        "Cosmetic Dentistry",
        "Oral Surgery",
        "Pediatric Dental"
    ];

    const imgHostingToken = process.env.REACT_APP_Image_Upload_Token;
    const imgHostinURL = `https://api.imgbb.com/1/upload?key=${imgHostingToken}`

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(imgHostinURL, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResult => {
                if (imgResult.success) {
                    const imgURL = imgResult.data.display_url;
                    const { name, email, specialty } = data;

                    const addNewDoctor = {
                        name,
                        email,
                        specialty,
                        image: imgURL
                    };
                    fetch('https://doc-house-server-rust.vercel.app/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('access-token')}`
                        },
                        body: JSON.stringify(addNewDoctor)
                    })
                        .then(res => {
                            if (res.status === 401 || res.status === 403) {
                                logout();
                                localStorage.removeItem('access-token');
                                navigate('/login');
                            }
                            return res.json()
                        })
                        .then(result => {
                            if (result.insertedId) {
                                reset();
                                swal({
                                    title: "Doctor added successfully",
                                    icon: "success",
                                    timer: 6000,
                                });
                                navigate('/dashboard/manage-doctors');
                            }
                            else {
                                swal({
                                    title: `${result.message}`,
                                    icon: "warning",
                                });
                            }
                        })
                }
            })
    };

    return (
        <section className='my-12'>
            <Title heading={'Welcome to Doc House'} title={'Add a new doctor'}></Title>
            <div className='rounded px-5 py-8 lg:p-12 w-11/12 lg:w-1/2 mx-auto bg-[#F1F5F9]'>
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
                    <div className="form-control">
                        <label className="label" >
                            <span className="label-text font-bold">Specialty*</span>
                        </label>
                        <select
                            {...register("specialty")}
                            type='text'
                            className="select rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                        >
                            {
                                specialtys.map((specialty, index) => <option
                                    key={index}
                                    specialty={specialty}
                                >{specialty}</option>)
                            }
                        </select>
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