import Dashboard from "../layout/Dashboard";
import Main from "../layout/Main";
import Appointment from "../pages/Appointment/Appointment/Appointment";
import AddDoctor from "../pages/Dashboard/AdminPages/AddDoctor/AddDoctor";
import AdminHome from "../pages/Dashboard/AdminPages/AdminHome/AdminHome";
import AllAppointments from "../pages/Dashboard/AdminPages/AllAppointments/AllAppointments";
import AllUsers from "../pages/Dashboard/AdminPages/AllUsers/AllUsers";
import ManageDoctors from "../pages/Dashboard/AdminPages/ManageDoctors/ManageDoctors";
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
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <AdminHome></AdminHome>
            },
            {
                path: 'all-users',
                element: <AllUsers></AllUsers>
            },
            {
                path: 'add-doctor',
                element: <AddDoctor></AddDoctor>
            },
            {
                path: 'manage-doctors',
                element: <ManageDoctors></ManageDoctors>
            },
            {
                path: 'all-appointments',
                element: <AllAppointments></AllAppointments>
            }
        ],
    },

]);

export default router;