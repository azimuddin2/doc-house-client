import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import './CheckoutForm.css';
import { toast } from 'react-toastify';
import swal from 'sweetalert';

const CheckoutForm = ({ refetch, payment, setPayment }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const { _id, patientName, treatment, price } = payment;

    useEffect(() => {
        fetch('https://doc-house-server-rust.vercel.app/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('access-token')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(result => {
                console.log(result.clientSecret);
                setClientSecret(result.clientSecret);
            })
    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            toast.error(error.message);
        }
        else {
            console.log('Payment Method', paymentMethod);
        }

        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'anonymous',
                        email: user?.email || 'unknown'
                    },
                },
            },
        );

        if (confirmError) {
            toast.error(confirmError.message);
            setProcessing(false);
            return;
        }

        if (paymentIntent.status === 'succeeded') {
            const transactionId = paymentIntent.id;
            const date = new Date();

            // TODO: payment information to the server save
            const paymentInfo = {
                patientName,
                email: user?.email,
                transactionId,
                date,
                price,
                treatment,
                treatmentId: _id,
                status: 'pending',
            };
            fetch(`https://doc-house-server-rust.vercel.app/booking/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('access-token')}`
                },
                body: JSON.stringify(paymentInfo)
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result)
                    if (result.insertedId) {
                        refetch();
                        swal({
                            title: "Congratulation!",
                            text: `Transaction Id: ${transactionId}`,
                            icon: "success",
                        });
                        setPayment(null);
                    }
                })
        }
        setProcessing(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                className='payment-input-field'
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button
                className='payment-btn'
                type="submit"
                disabled={!stripe || !clientSecret || processing}
            >
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;