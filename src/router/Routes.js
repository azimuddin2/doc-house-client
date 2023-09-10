import Main from "../layout/Main";
import Appointment from "../pages/Appointment/Appointment/Appointment";
import Home from "../pages/Home/Home/Home";
import OurServices from "../pages/Home/OurServices/OurServices";
import Login from "../pages/Login/Login/Login";
import SignUp from "../pages/Login/SignUp/SignUp";

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
                path: '/our-services/:category',
                element: <OurServices></OurServices>
            },
            {
                path: 'appointment',
                element: <Appointment></Appointment>
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