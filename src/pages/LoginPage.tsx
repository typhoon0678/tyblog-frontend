import {useState} from 'react';
import BasicLayout from "../components/BasicLayout.tsx";
import {useNavigate} from "react-router-dom";
import {login} from "../api/login.tsx";

function LoginPage() {

    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const submit = () => {
        login(loginInfo.email, loginInfo.password)
            .then(() => navigate("/"))
            .catch((err) => alert(err.response.data.message));
    }

    return (
        <BasicLayout>
            <input id="email" type="email" placeholder="Email"
                   onChange={(e) => setLoginInfo({...loginInfo, email: e.currentTarget.value})}/>
            <input id="password" type="password" placeholder="Password"
                   onChange={(e) => setLoginInfo({...loginInfo, password: e.currentTarget.value})}/>
            <button onClick={submit}>로그인
            </button>
            <button onClick={() => navigate("/signup")}>회원가입</button>
        </BasicLayout>
    );
}

export default LoginPage;