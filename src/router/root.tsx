import {createBrowserRouter} from "react-router-dom";
import {Suspense} from "react";
import Loading from "../components/Loading.tsx";
import {Login, Main, MyBlog, Signup} from "./pages.tsx";

const root = createBrowserRouter([
    {
        path: '/',
        element: <Suspense fallback={Loading}><Main/></Suspense>
    },
    {
        path: '/login',
        element: <Suspense fallback={Loading}><Login/></Suspense>
    },
    {
        path: '/signup',
        element: <Suspense fallback={Loading}><Signup/></Suspense>
    },
    {
        path: '/blog/:username',
        element: <Suspense fallback={Loading}><MyBlog/></Suspense>
    },
])

export default root;