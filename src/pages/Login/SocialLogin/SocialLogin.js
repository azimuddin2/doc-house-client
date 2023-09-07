import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div className='px-4 md:px-10 lg:px-10'>
            <div className="divider mt-0">Or</div>
            <button
                // onClick={handleSignInWithGoogle}
                className="btn btn-outline w-full btn-primary"
            >
                <FcGoogle className='text-3xl'></FcGoogle>
                <span className=''>CONTINUE WITH GOOGLE</span>
            </button>
        </div>
    );
};

export default SocialLogin;