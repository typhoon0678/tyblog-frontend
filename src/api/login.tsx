import {axiosApi} from "../utils/axiosApi.tsx";

export const login = async (email: string, password: string) =>
    await axiosApi.post('/member/login', {
        email: email,
        password: password,
    });

export const kakaoLogin = () => {
    location.href = `${import.meta.env.VITE_SERVER_URL}/oauth2/authorization/kakao`;
}

export const naverLogin = () => {
    location.href = `${import.meta.env.VITE_SERVER_URL}/oauth2/authorization/naver`;
}

export const googleLogin = () => {
    location.href = `${import.meta.env.VITE_SERVER_URL}/oauth2/authorization/google`;
}

export const logout = async () =>
    await axiosApi.get('/member/logout');

export const signup = async (email: string, password: string) =>
    await axiosApi.post('/member/signup', {
        email: email,
        password: password,
    });

export const checkToken = async () =>
    await axiosApi.get('/member/token');

export const getUsername = async () =>
    await axiosApi.get('/member/username');