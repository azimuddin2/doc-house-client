import Main from "../layout/Main";
import Appointment from "../pages/Appointment/Appointment/Appointment";
import DoctorProfile from "../pages/DoctorProfile/DoctorProfile";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import SignUp from "../pages/Login/SignUp/SignUp";
import Reviews from "../pages/Reviews/Reviews";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'appointment',
                element: <PrivateRoute>
                    <Appointment></Appointment>
                </PrivateRoute>
            },
            {
                path: 'reviews',
                element: <Reviews></Reviews>
            },
            {
                path: '/doctor-profile/:id',
                element: <DoctorProfile></DoctorProfile>,
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/doctor-profile/${params.id}`)
                }
            }
        ],
    },
    {
        path: 'login',
        element: <Login></Login>
    },
    {
        path: 'signup',
        element: <SignUp></SignUp>
    },

]);

export default router;