import {lazy} from "react";

export const Main = lazy(() => import('../pages/MainPage.tsx'))
export const Login = lazy(() => import('../pages/LoginPage.tsx'))
export const Signup = lazy(() => import('../pages/SignupPage.tsx'))
export const MyBlog = lazy(() => import('../pages/MyBlogPage.tsx'))
export const Post = lazy(() => import('../pages/PostPage.tsx'))
export const WritePost = lazy(() => import('../pages/WritePostPage.tsx'))
