import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home/Home.jsx";
import Root from "./components/Root/Root.jsx";
import Donation from "./components/Donation/Donation";
import Statistics from "./components/Statistics/Statistics";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import DonetionDetails from "./components/DonetionDetails/DonetionDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("/fake-data.json"),
            },
            {
                path: "/donations",
                element: <Donation></Donation>,
                loader: () => fetch("/fake-data.json"),
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>,
            },
            {
                path: "/donation/:id",
                element: <DonetionDetails></DonetionDetails>,
                loader: () => fetch("/fake-data.json"),
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
