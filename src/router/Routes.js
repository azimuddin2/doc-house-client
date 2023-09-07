import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import OurServices from "../pages/Home/OurServices/OurServices";
import Login from "../pages/Login/Login/Login";

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
        ],
    },
    {
        path: 'login',
        element: <Login></Login>
    },

]);

export default router;