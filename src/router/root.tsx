import {createBrowserRouter} from "react-router-dom";
import {Suspense} from "react";
import Loading from "../components/Loading.tsx";
import {Login, Main, MyBlog, Post, Signup, WritePost} from "./pages.tsx";

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
    {
        path: '/blog/:username/:id',
        element: <Suspense fallback={Loading}><Post/></Suspense>
    },
    {
        path: '/write',
        element: <Suspense fallback={Loading}><WritePost/></Suspense>
    },
])

export default root;