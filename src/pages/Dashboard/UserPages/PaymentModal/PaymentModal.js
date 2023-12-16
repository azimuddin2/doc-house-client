import React from 'react';

const PaymentModal = ({ payment, setPayment, refetch }) => {
    const { patientName, treatment, date, slot, price } = payment;

    return (
        <div>
            <input type="checkbox" id="payment-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label htmlFor="payment-modal" className="btn btn-sm btn-primary btn-circle absolute right-2 top-2 text-white">✕</label>
                    <h4 className='text-lg font-semibold text-secondary'>Hello, {patientName}</h4>
                    <h3 className="font-bold text-xl mt-2 text-accent">Please Pay for <span className=' text-primary'>{treatment}</span></h3>
                    <p className='text-lg text-accent my-2'>Your Appointment: <span style={{color: '#F0AA22'}}>{date}</span> at {slot}</p>
                    <h2 className='text-xl font-bold text-accent'>Please Pay: <span className='text-primary'>${price}</span></h2>
                    <div className="divider"></div>
                    {/* <div>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                            refetch={refetch}
                            payment={payment}
                            totalToolPrice={totalToolPrice}
                            setPayment={setPayment}
                        />
                    </Elements>
                </div> */}
                </div>
            </div>
        </div>
    );
};

export default PaymentModal;