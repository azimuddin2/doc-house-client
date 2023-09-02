import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";

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
            
        ],
    },

]);

export default router;