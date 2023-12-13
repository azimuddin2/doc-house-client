import React from 'react';

const AddReview = () => {
    return (
        <div className='my-10'>
            <SectionTitle subHeading={'Sharing is Caring!'} heading={'Give a Review'}></SectionTitle>
            <div className='px-5 py-8 lg:p-12 w-11/12 lg:w-3/5 mx-auto bg-[#F3F3F3]'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='text-center mb-6'>
                        <h2 className='text-xl uppercase font-medium mb-2 font-family'>Rate Us!</h2>
                        <StarRatings
                            rating={rating}
                            starRatedColor="#D99904"
                            name="rating"
                            starSpacing="2px"
                            changeRating={changeRating}
                            starDimension="34px"
                            starHoverColor="#D99904"
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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email*</span>
                            </label>
                            <input
                                {...register("email")}
                                type='email'
                                defaultValue={user?.email}
                                disabled
                                style={{ background: '#fff' }}
                                className="input rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            />
                        </div>
                        <div className="form-control mt-3">
                            <label className="label">
                                <span className="label-text font-semibold">Review Message*</span>
                            </label>
                            <textarea
                                {...register("details", {
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
                                {errors.details?.type === 'required' && <span className="label-text-alt text-red-500 text-sm flex items-center"><MdOutlineErrorOutline className='text-lg' style={{ marginRight: '2px' }}></MdOutlineErrorOutline>{errors.details.message}</span>}
                            </label>
                        </div>
                    </div>
                    <Button>Send Review <IoRocketSharp className='text-xl animate-bounce' /></Button>
                </form>
            </div>
        </div>
    );
};

export default AddReview;