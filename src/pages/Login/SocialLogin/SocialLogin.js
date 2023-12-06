import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../../hooks/useAuth';

const SocialLogin = () => {
    const { signInWithGoogle } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const provider = new GoogleAuthProvider();

    const handleSignInWithGoogle = () => {
        signInWithGoogle(provider)
            .then(result => {
                const user = result.user;
                console.log(user);
                swal({
                    title: "User Login Successful!",
                    text: `Welcome - ${user?.displayName}`,
                    icon: "success",
                });
                navigate(from, { replace: true });
            })
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
        <div className='px-4 md:px-10 lg:px-10 mt-3'>
            <div className="divider mt-0">Or</div>
            <button
                onClick={handleSignInWithGoogle}
                className="btn btn-outline w-full btn-primary"
            >
                <FcGoogle className='text-3xl'></FcGoogle>
                <span className=''>CONTINUE WITH GOOGLE</span>
            </button>
        </div>
    );
};

export default SocialLogin;