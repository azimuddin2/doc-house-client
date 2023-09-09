import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../../providers/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const provider = new GoogleAuthProvider();

    const handleSignInWithGoogle = () => {
        signInWithGoogle(provider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true});
            })
            .catch(error => {
                toast.error(error.message);
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