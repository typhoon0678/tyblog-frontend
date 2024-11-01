import {ReactNode, useEffect} from 'react';
import Header from "./Header.tsx";
import {checkToken} from "../api/login.tsx";
import {useDispatch} from "react-redux";
import {login, logout} from "../slices/loginSlice.tsx";

function BasicLayout({children}: { children: ReactNode }) {

    const dispatch = useDispatch();

    useEffect(() => {
        checkToken()
            .then((res) => {
                if (res.data.email) {
                    dispatch(login(res.data));
                } else {
                    dispatch(logout());
                }
            })
            .catch((err) => console.log(err))
    }, []);

    return (
        <main className="w-screen h-auto">
            <div className="max-w-screen-lg 2xl:max-w-screen-xl mx-auto">
                <Header/>
                {children}
                <div className="h-16"/>
            </div>
        </main>
    );
}

export default BasicLayout;