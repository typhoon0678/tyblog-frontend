import {axiosApi} from "../utils/axiosApi.tsx";
import {WritePostType} from "./types/postType.tsx";

export const getRecentPosts = async (page: number, size: number) =>
    await axiosApi.get(`/post/recent?page=${page}&size=${size}`);

export const getMemberPosts = async (username: string, page: number, size: number) =>
    await axiosApi.get(`/post/${username}?page=${page}&size=${size}`);

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