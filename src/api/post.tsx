import {axiosApi} from "../utils/axiosApi.tsx";

export const getRecentPosts = async () =>
    await axiosApi.get('/post/recent');