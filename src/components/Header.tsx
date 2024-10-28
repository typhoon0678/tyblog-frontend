import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../store.tsx";
import {logout} from "../api/login.tsx";

function Header() {

    const loginState = useSelector((state: RootState) => state.loginSlice);

    const navigate = useNavigate();

    return (
        <div className="flex justify-between items-center h-16 px-4">
            <button className="font-semibold"
                    onClick={() => navigate("/")}>
                TYBLOG
            </button>
            {loginState.isLogin
                ? <button className="px-2 py-1 font-semibold"
                          onClick={() =>
                              logout()
                                  .then(() => navigate(0))
                                  .catch(() => alert("문제가 발생했습니다. 다시 시도해주세요."))}>
                    로그아웃
                </button>
                : <button className="px-2 py-1 font-semibold"
                          onClick={() => navigate("/login")}>
                    로그인
                </button>}
        </div>
    );
}

export default Header;