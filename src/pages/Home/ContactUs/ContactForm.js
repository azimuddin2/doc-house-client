import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './ContactForm.css';
import { MdOutlineDateRange } from 'react-icons/md';

const ContactForm = () => {
    const [selectDate, setSelectDate] = useState(new Date());
    const times = [
        "10:00 am",
        "10:30 am",
        "11:00 am",
        "11:30 am",
        "12:00 am",
        "12:30 am",
        "1:00 am",
        "1:30 am",
        "2:00 am",
        "2:30 am",
        "3:00 am",
        "3:30 am",
        "4:00 am",
        "4:30 am",
        "5:00 am",
        "5:30 am",
        "6:00 am",
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const mobile = form.mobile.value;
        const doctor = form.doctor.value;
        const date = form.date.value;
        const time = form.time.value;

        const bookInfo = {
            name,
            email,
            mobile,
            doctor,
            date,
            time
        };
        console.log(bookInfo);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div>
                    <input
                        name='name'
                        type="text"
                        placeholder="Name"
                        style={{ background: "rgba(255, 255, 255, 0.05)" }}
                        className="w-full input input-bordered focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                        required
                    />
                </div>
                <div>
                    <input
                        name='email'
                        type="email"
                        placeholder="Email"
                        style={{ background: "rgba(255, 255, 255, 0.05)" }}
                        className="w-full input input-bordered focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                        required
                    />
                </div>
                <div>
                    <input
                        name='mobile'
                        type="text"
                        placeholder="Mobile Number"
                        style={{ background: "rgba(255, 255, 255, 0.05)" }}
                        className="w-full input input-bordered focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                        required
                    />
                </div>
                <div>
                    <input
                        name='doctor'
                        type="text"
                        placeholder="Doctor Name"
                        style={{ background: "rgba(255, 255, 255, 0.05)" }}
                        className="w-full input input-bordered focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                        required
                    />
                </div>
                <div className='relative'>
                    <ReactDatePicker
                        name='date'
                        className="w-full input input-bordered focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                        showIcon
                        selected={selectDate}
                        onChange={(date) => setSelectDate(date)}
                        dateFormat='Pp'
                    ></ReactDatePicker>
                    <MdOutlineDateRange className='text-xl mr-2 absolute right-1 top-3'></MdOutlineDateRange>
                </div>
                <div>
                    <select
                        name='time'
                        style={{ background: "rgba(255, 255, 255, 0.05)" }}
                        className="input input-bordered w-full focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                    >
                        {
                            times.map((time, index) => <option
                                defaultValue={time}
                                className='text-black'
                                key={index}
                                time={time}
                            >{time}</option>)
                        }
                    </select>
                </div>
            </div>
            <button className='btn btn-secondary text-white w-full capitalize mt-6'>Book Now</button>
        </form>
    );
};

export default ContactForm;