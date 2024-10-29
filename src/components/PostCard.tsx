import {IoIosArrowForward} from "react-icons/io";
import {useNavigate} from "react-router-dom";
import PostCategoryDiv from "./PostCategoryDiv.tsx";

function PostCard() {

    const navigate = useNavigate();

    return (
        <div className="mx-auto border border-gray-300 rounded-lg h-96 w-64">
            <img src={"https://upload.wikimedia.org/wikipedia/commons/8/85/Logo-Test.png"} alt="postImage"
            className="h-40 object-contain border-b"/>
            <div className="h-[calc(100%-192px)] m-4 flex flex-col justify-around">
                <div className="flex gap-x-2 overflow-hidden">
                    <PostCategoryDiv categories={["Spring"]}/>
                    <PostCategoryDiv categories={["React"]}/>
                </div>
                <div className="font-semibold h-12 line-clamp-2">
                    제목
                </div>
                <div className="text-gray-500 h-12 line-clamp-2">
                    설명
                </div>
                <div>
                    <button className="flex justify-start items-center border border-gray-700 rounded-sm p-1"
                            onClick={() => navigate("/blog/username/id")}>
                        <div className="flex justify-center items-center px-1.5">
                            <div className="text-sm">Read More</div>
                            <div className="w-1"/>
                            <IoIosArrowForward className="text-sm"/>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PostCard;