import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../store.tsx";
import {getUsername, logout} from "../api/login.tsx";

function Header() {

    const loginState = useSelector((state: RootState) => state.loginSlice);

    const navigate = useNavigate();

    return (
        <div className="flex justify-between items-center h-16 px-4">
            <button className="font-semibold text-xl text-indigo-600"
                    onClick={() => navigate("/")}>
                TYBLOG
            </button>
            {loginState.isLogin
                ? <div className="">
                    <button className="rounded-lg bg-indigo-600 text text-white px-4 py-1.5 mr-6"
                            onClick={() => {
                                getUsername()
                                    .then((res) => navigate(`/blog/${res.data.username}`))
                                    .catch((err) => {
                                        console.log(err);
                                        alert("문제가 발생했습니다. 다시 시도해주세요.")
                                    })
                            }}>
                        내 블로그
                    </button>
                    <button className="px-2 py-1 font-semibold"
                            onClick={() =>
                                logout()
                                    .then(() => navigate(0))
                                    .catch(() => alert("문제가 발생했습니다. 다시 시도해주세요."))}>
                        로그아웃
                    </button>
                </div>
                : <div>
                    <button className="px-2 py-1 text mr-6"
                            onClick={() => navigate("/login")}>
                        로그인
                    </button>
                    <button className="rounded-lg bg-indigo-600 text text-white px-4 py-1.5"
                            onClick={() => navigate("/signup")}>
                        회원가입
                    </button>
                </div>
            }

        </div>
    );
}

export default Header;