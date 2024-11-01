import {axiosApi} from "../utils/axiosApi.tsx";
import {WritePostType} from "./types/postType.tsx";

export const getPost = async (id: number) =>
    await axiosApi.get(`/post/${id}`);

export const getRecentPosts = async (page: number, size: number) =>
    await axiosApi.get(`/post/recent?page=${page}&size=${size}`);

export const getMemberPosts = async (username: string, categoryId: number, page: number, size: number) =>
    await axiosApi.get(`/post/member/${username}?categoryId=${categoryId}&page=${page}&size=${size}`);

export const uploadImage = async (blobInfo: any) => {
    const formData = new FormData();
    formData.append("image", blobInfo.blob());
    return await axiosApi.post('/post/image', formData);
};

export const createPost = async (post: WritePostType) =>
    await axiosApi.post('/post', {
        title: post.title,
        content: post.content,
        categoryIds: post.categoryIds,
    });