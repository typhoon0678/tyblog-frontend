import {lazy} from "react";

export const Main = lazy(() => import('../pages/MainPage'))
export const Login = lazy(() => import('../pages/LoginPage'))
export const Signup = lazy(() => import('../pages/SignupPage'))
export const MyBlog = lazy(() => import('../pages/MyBlogPage'))
export const Post = lazy(() => import('../pages/PostPage'))
export const WritePost = lazy(() => import('../pages/WritePostPage'))
