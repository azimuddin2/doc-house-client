import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { useEffect } from "react";
import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://doc-house-server-rust.vercel.app',
});

const useAxiosSecure = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('access-token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });

        axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    await logout();
                    navigate('/login');
                }
                return Promise.reject(error);
            }
        );
    }, [logout, navigate]);

    return [axiosSecure];
}

export default useAxiosSecure;