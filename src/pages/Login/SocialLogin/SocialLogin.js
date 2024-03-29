import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../../hooks/useAuth';
import useToken from '../../../hooks/useToken';

const SocialLogin = () => {
    const { signInWithGoogle } = useAuth();
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const provider = new GoogleAuthProvider();

    const handleSignInWithGoogle = () => {
        signInWithGoogle(provider)
            .then(result => {
                const user = result.user;
                console.log(user);
                saveUserDatabase(user.displayName, user.email);
                setLoginUserEmail(user.email);
                swal({
                    title: "User Login Successful!",
                    text: `Welcome - ${user?.displayName}`,
                    icon: "success",
                });
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

    const saveUserDatabase = (name, email) => {
        const user = {
            name,
            email
        };
        fetch('https://doc-house-server-rust.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {

                }
            })
    };

    if (token) {
        navigate(from, { replace: true });
    }

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