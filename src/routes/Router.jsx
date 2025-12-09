import { createBrowserRouter } from "react-router";
import RootLayout from "../lauouts/RootLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../components/shared/ErrorPage";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register
            }
        ]
    },
]);