import React from 'react';

const ContactForm = () => {
    return (
        <div>
            <form>
                <input
                    name=''
                    type="text"
                    placeholder="Type here"
                    className=" w-64 input input-bordered focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                />
            </form>
        </div>
    );
};

export default ContactForm;