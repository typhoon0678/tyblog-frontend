import {axiosApi} from "../utils/axiosApi.tsx";


export const login = async (email: string, password: string) =>
    await axiosApi.post('/member/login', {
        email: email,
        password: password,
    });

export const logout = async () =>
    await axiosApi.get('/member/logout');

export const signup = async (email: string, password: string) =>
    await axiosApi.post('/member/signup', {
        email: email,
        password: password,
    });


export const checkToken = async () =>
    await axiosApi.get('/member/token');
