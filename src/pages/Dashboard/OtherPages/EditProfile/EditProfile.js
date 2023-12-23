import React from 'react';
import { useForm } from 'react-hook-form';
import { MdOutlineErrorOutline } from 'react-icons/md';
import useAuth from '../../../../hooks/useAuth';
import Button from '../../../../components/Button/Button';
import { FiCheckCircle } from 'react-icons/fi';
import Title from '../../../../components/Title/Title';
import uploadIcon from '../../../../assets/Icons/upload-photo.svg';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import swal from 'sweetalert';

const EditProfile = () => {
    const { user, updateUserProfile } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const imgHostingToken = process.env.REACT_APP_Image_Upload_Token;
    const imgHostinURL = `https://api.imgbb.com/1/upload?key=${imgHostingToken}`;

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
                    const { name, phone } = data;

                    // NOTE: user update information firebase save
                    handleUpdateUserProfile(name, imgURL);

                    //NOTE: user update information database save
                    const updateInfo = {
                        name,
                        phone,
                        email: user?.email,
                        image: imgURL
                    };
                    axiosSecure.put('/users', updateInfo)
                        .then(result => {
                            if (result.data.modifiedCount) {
                                reset();
                                swal({
                                    title: "Profile updated successfully",
                                    icon: "success",
                                    timer: 6000,
                                });
                            }
                        })
                }
            })
    };

    const handleUpdateUserProfile = (name, imgURL) => {
        const profile = {
            displayName: name,
            photoURL: imgURL
        };
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => {
                swal({
                    title: "Oops...",
                    text: `${error.message}`,
                    icon: "error",
                    button: "Try again",
                });
            })
    };

    return (
        <section className='my-10'>
            <Title heading={'My Information'} title={'Update Profile'}></Title>
            <div className='px-5 py-8 lg:p-12 mt-20 w-11/12 lg:w-1/2 mx-auto bg-[#F1F5F9] rounded-lg'>


                <div className='text-center mb-4'>
                    {
                        user.photoURL ?
                            <div className="avatar online mt-[-100px]">
                                <div className="w-28 rounded-full">
                                    <img src={user.photoURL} alt="" />
                                </div>
                            </div>
                            :
                            <div className='mt-[-100px]'>
                                <div className="avatar online placeholder">
                                    <div className="bg-primary text-white rounded-full w-28">
                                        <span className="text-6xl">{user.displayName.slice(0, 1)}</span>
                                    </div>
                                </div>
                            </div>
                    }
                </div>


                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full">
                        <label
                            htmlFor='image'
                            className="input w-full h-24 cursor-pointer text-center pt-4 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                        >
                            <span className="label-text text-accent font-medium">Upload Photo</span>
                            <div className=' flex justify-center items-center'>
                                <img src={uploadIcon} alt="uploadIcon" className='mt-1' />
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

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email*</span>
                        </label>
                        <input
                            {...register("email")}
                            type='email'
                            defaultValue={user.email}
                            disabled
                            style={{ background: '#fff' }}
                            className="input rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                        />
                    </div>

                    <div className="form-control mb-5 mt-2">
                        <label className="label">
                            <span className="label-text font-semibold">Phone Number*</span>
                        </label>
                        <input
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: 'Phone Number is required',
                                }
                            })}
                            type='text'
                            placeholder="Enter Phone Number"
                            className="input rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                        />
                        <label className="label pt-1">
                            {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500 text-sm flex items-center"><MdOutlineErrorOutline className='text-lg' style={{ marginRight: '2px' }}></MdOutlineErrorOutline>{errors.phone.message}</span>}
                        </label>
                    </div>

                    <div className='text-center'>
                        <Button>Update Profile<FiCheckCircle className='text-xl'></FiCheckCircle></Button>
                    </div>
                </form>


            </div>
        </section>
    );
};

export default EditProfile;