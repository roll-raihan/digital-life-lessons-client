import { createBrowserRouter } from "react-router";
import RootLayout from "../lauouts/RootLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../components/shared/ErrorPage";

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
        ]
    },
]);