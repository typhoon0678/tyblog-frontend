import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../store.tsx";
import {getUsername, logout} from "../api/login.tsx";
import MainSmallFillButton from "../pages/MainSmallFillButton.tsx";
import MainSmallButton from "../pages/MainSmallButton.tsx";

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
                ? <div className="flex">
                    <MainSmallFillButton text="내 블로그" onClick={() => {
                        getUsername()
                            .then((res) => navigate(`/blog/${res.data.username}`))
                            .catch((err) => {
                                console.log(err);
                                alert("문제가 발생했습니다. 다시 시도해주세요.")
                            })
                    }}/>
                    <div className="mr-6"/>
                    <MainSmallButton text="글 작성하기" onClick={() => navigate("/write")}/>
                    <div className="mr-6"/>
                    <button className="px-2 py-1 font-normal"
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
                    <MainSmallFillButton text="회원가입" onClick={() => navigate("/signup")}/>
                </div>
            }
        </div>
    );
}

export default Header;