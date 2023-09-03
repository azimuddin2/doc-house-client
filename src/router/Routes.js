import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import OurServices from "../pages/Home/OurServices/OurServices";

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

]);

export default router;