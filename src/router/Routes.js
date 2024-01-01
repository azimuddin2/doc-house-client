import Dashboard from "../layout/Dashboard";
import Main from "../layout/Main";
import Appointment from "../pages/Appointment/Appointment/Appointment";
import AddDoctor from "../pages/Dashboard/AdminPages/AddDoctor/AddDoctor";
import AdminHome from "../pages/Dashboard/AdminPages/AdminHome/AdminHome";
import AllAppointments from "../pages/Dashboard/AdminPages/AllAppointments/AllAppointments";
import AllUsers from "../pages/Dashboard/AdminPages/AllUsers/AllUsers";
import ManageDoctors from "../pages/Dashboard/AdminPages/ManageDoctors/ManageDoctors";
import EditProfile from "../pages/Dashboard/OtherPages/EditProfile/EditProfile";
import AddReview from "../pages/Dashboard/UserPages/AddReview/AddReview";
import MyAppointment from "../pages/Dashboard/UserPages/MyAppointment/MyAppointment";
import PaymentHistory from "../pages/Dashboard/UserPages/PaymentHistory/PaymentHistory";
import DoctorProfile from "../pages/DoctorProfile/DoctorProfile";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import SignUp from "../pages/Login/SignUp/SignUp";
import Reviews from "../pages/Reviews/Reviews";
import AdminRoute from "./AdminRoute";
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
                    return fetch(`https://doc-house-server-rust.vercel.app/doctor-profile/${params.id}`)
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
                path: 'edit-profile',
                element: <EditProfile></EditProfile>
            },
            {
                path: 'my-appointment',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: 'add-review',
                element: <AddReview></AddReview>
            },
            {
                path: 'payment-history',
                element: <PaymentHistory></PaymentHistory>
            },

            // TODO: admin routes
            {
                path: '/dashboard',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: 'all-users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>,
                loader: async () => {
                    return fetch('https://doc-house-server-rust.vercel.app/usersCount')
                }
            },
            {
                path: 'add-doctor',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: 'manage-doctors',
                element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>,
                loader: async () => {
                    return fetch('https://doc-house-server-rust.vercel.app/doctorsCount');
                }
            },
            {
                path: 'all-appointments',
                element: <AdminRoute><AllAppointments></AllAppointments></AdminRoute>
            }
        ],
    },

]);

export default router;