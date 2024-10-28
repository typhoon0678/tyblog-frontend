import {useState} from 'react';
import BasicLayout from "../components/BasicLayout.tsx";
import {signup} from "../api/login.tsx";
import {useNavigate} from "react-router-dom";

function SignupPage() {

    const navigate = useNavigate();

    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: "",
    });

    const submit = () => {
        signup(loginInfo.email, loginInfo.password)
            .then(() => {
                alert("회원가입 되었습니다.")
                navigate("/login");
            })
            .catch(() => {
                alert("이미 회원가입된 이메일입니다.");
            });
    }

    return (
        <BasicLayout>
            <input id="email" type="email" placeholder="Email"
                   onChange={(e) => setLoginInfo({...loginInfo, email: e.currentTarget.value})}/>
            <input id="password" type="password" placeholder="Password"
                   onChange={(e) => setLoginInfo({...loginInfo, password: e.currentTarget.value})}/>
            <button onClick={submit}>회원가입
            </button>
        </BasicLayout>
    );
}

export default SignupPage;