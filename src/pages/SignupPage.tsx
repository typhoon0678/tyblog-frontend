import {useEffect, useState} from 'react';
import BasicLayout from "../components/BasicLayout.tsx";
import {signup} from "../api/login.tsx";
import {useNavigate} from "react-router-dom";

function SignupPage() {

    const navigate = useNavigate();

    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        isActive: false
    });

    const submit = () => {
        signup(loginInfo.email, loginInfo.password)
            .then(() => {
                alert("회원가입 되었습니다.")
                navigate("/login");
            })
            .catch((err) => {
                console.log(err.response.data);
                alert(err.response.data.message);
            });
    }

    useEffect(() => {
        if (loginInfo.email.match("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$") &&
            loginInfo.password.match("^(?=.*[a-zA-Z])(?=.*\\d|.*[!@#$%^&*()_+\\-=\\[\\]{};':\"\\\\|,.<>\\/?])(?=.{8,16}).*|^(?=.*\\d)(?=.*[!@#$%^&*()_+\\-=\\[\\]{};':\"\\\\|,.<>\\/?])(?=.{8,}).*$") &&
            loginInfo.password === loginInfo.confirmPassword) {
            setLoginInfo({...loginInfo, isActive: true});
        } else {
            setLoginInfo({...loginInfo, isActive: false});
        }
    }, [loginInfo.email, loginInfo.password, loginInfo.confirmPassword]);

    return (
        <BasicLayout>
            <div className="h-[calc(100vh-128px)] w-full flex items-center justify-center">
                <div className="flex flex-col border border-gray-300 rounded-2xl w-96 p-8 gap-y-6">
                    <h2 className="font-bold text-xl">회원가입</h2>
                    <div className="flex flex-col gap-y-2">
                        <label htmlFor="email">이메일</label>
                        <input id="email" type="email" placeholder="tyblog@example.com"
                               className="border border-gray-300 rounded-lg block bg-gray-50 text-gray-700 p-2"
                               onChange={(e) => setLoginInfo({...loginInfo, email: e.currentTarget.value})}/>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <label htmlFor="password">비밀번호</label>
                        <input id="password" type="password" placeholder="영문, 숫자, 특수문자 중 2개 이상 조합 8~16자"
                               className="border border-gray-300 rounded-lg bg-gray-50 p-2"
                               onChange={(e) => setLoginInfo({...loginInfo, password: e.currentTarget.value})}/>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <label htmlFor="confirmPassword">비밀번호 확인</label>
                        <input id="confirmPassword" type="password" placeholder="영문, 숫자, 특수문자 중 2개 이상 조합 8~16자"
                               className="border border-gray-300 rounded-lg bg-gray-50 p-2"
                               onChange={(e) => setLoginInfo({...loginInfo, confirmPassword: e.currentTarget.value})}/>
                    </div>
                    <div className="flex flex-col mt-4">
                        <button
                            className={`${(loginInfo.isActive)
                                ? "bg-indigo-600 text-white" : "bg-gray-600 text-white"} 
                                    rounded font-normal py-2`}
                            onClick={submit}
                            disabled={!loginInfo.isActive}>
                            회원가입
                        </button>
                    </div>
                </div>
            </div>
        </BasicLayout>
    );
}

export default SignupPage;