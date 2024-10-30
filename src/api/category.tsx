import {axiosApi} from "../utils/axiosApi.tsx";

export const getCategories = async () =>
    await axiosApi.get('/category');