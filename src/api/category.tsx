import {axiosApi} from "../utils/axiosApi.tsx";

export const getCategories = async () =>
    await axiosApi.get(`/category`);

export const getCategoriesByUsername = async (username: string) =>
    await axiosApi.get(`/category/${username}`);