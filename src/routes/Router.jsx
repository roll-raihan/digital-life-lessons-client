import { createBrowserRouter } from "react-router";
import RootLayout from "../lauouts/RootLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../components/shared/ErrorPage";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import MyLessons from "../pages/Dashboard/MyLessons";
import PrivateRoute from "./PrivateRoute";
import AddLessons from "../pages/Dashboard/AddLessons";
import BePremium from "../pages/BePremium/BePremium";
import Success from "../pages/payment/Success";
import Cancel from "../pages/payment/Cancel";
import MyFavoritesLessons from "../pages/Dashboard/MyFavoritesLessons";
import MyLessonsDetails from "../pages/Dashboard/MyLessonsDetails";
import PublicLessons from "../pages/PublicLessons/PublicLessons";
import LessonDetails from "../pages/Dashboard/Details/LessonDetails";
import Profile from "../pages/Dashboard/Profile";

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
            },
            {
                path: '/public-lessons',
                Component: PublicLessons
            },
            {
                path: '/public-lessons/:id',
                element: <PrivateRoute>
                    <LessonDetails></LessonDetails>
                </PrivateRoute>
            },
            {
                path: '/be-premium',
                element: <PrivateRoute>
                    <BePremium></BePremium>
                </PrivateRoute>
            },
            {
                path: '/payment-success',
                Component: Success
            },
            {
                path: '/payment-cancel',
                Component: Cancel
            },
            {
                path: '/dashboard',
                element: <PrivateRoute>
                    <Dashboard></Dashboard>
                </PrivateRoute>,
                children: [
                    {
                        path: '/dashboard/my-lessons',
                        Component: MyLessons
                    },
                    {
                        path: '/dashboard/my-lessons/:id',
                        Component: MyLessonsDetails
                    },
                    {
                        path: '/dashboard/add-lessons',
                        Component: AddLessons
                    },
                    {
                        path: '/dashboard/my-favorites',
                        Component: MyFavoritesLessons
                    },
                    {
                        path: '/dashboard/profile',
                        Component: Profile
                    }
                ]
            }
        ]
    },
]);