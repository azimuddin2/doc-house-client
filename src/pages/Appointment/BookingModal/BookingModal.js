import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const BookingModal = ({ treatment, setTreatment, date, refetch }) => {

    const { user } = useContext(AuthContext);
    const { _id, name, price, slots } = treatment;
    const formatDate = format(date, 'PP');

    const handleBooking = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const phone = event.target.phone.value;

        const booking = {
            treatmentId: _id,
            treatment: name,
            price,
            date: formatDate,
            slot,
            patientName: user?.displayName,
            patientEmail: user?.email,
            patientPhone: phone,
        };
        console.log(booking)
    };

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-primary btn-circle absolute right-2 top-2 text-white">✕</label>
                    <h3 className="font-bold text-2xl text-center">{name}</h3>
                    <form
                        onSubmit={handleBooking}
                        className='grid grid-cols-1 gap-4 justify-items-center my-6'
                    >
                        <input
                            type="text"
                            disabled
                            defaultValue={format(date, 'PP')}
                            className="input input-bordered w-full max-w-sm text-lg"
                        />
                        <select
                            name='slot'
                            className="select select-bordered w-full max-w-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                        >
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input
                            name='name'
                            type="text"
                            disabled
                            defaultValue={user?.displayName || ''}
                            className="input input-bordered w-full max-w-sm"
                        />
                        <input
                            name='email'
                            type="email"
                            disabled
                            defaultValue={user?.email || ''}
                            className="input input-bordered w-full max-w-sm"
                        />
                        <input
                            name='phone'
                            type="text"
                            placeholder="Phone Number"
                            className="input input-bordered w-full max-w-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                            required
                        />
                        <input
                            type="submit"
                            value="SUBMIT"
                            className='btn btn-primary text-white w-full max-w-sm bg-primary'
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;