import {useNavigate} from "react-router-dom";
import PostCategoryDiv from "./PostCategoryDiv.tsx";
import {Post} from "../api/types/postType.tsx";
import DOMPurify from "dompurify";
import {getImgSrc, removeImgTags} from "../utils/htmlUtil.tsx";
import {CiImageOn} from "react-icons/ci";
import {dateToKorean} from "../utils/dateUtil.tsx";

function PostCard({post}: { post: Post }) {

    const navigate = useNavigate();

    const safeContent = DOMPurify.sanitize(post.content);
    const imgSrc = getImgSrc(safeContent);
    const safeContentWithoutImg = removeImgTags(safeContent);

    return (
        <div className="mx-auto border border-gray-300 rounded-lg h-96 w-64 hover:cursor-pointer hover:shadow-lg
        transition transform ease-out delay-100 duration-300 hover:-translate-y-2"
             onClick={() => navigate("/blog/username/id")}>
            {(imgSrc)
                ? <img src={imgSrc} alt="postImage"
                       className="h-40 w-full object-cover border-b"/>
                : <CiImageOn className="h-40 w-full p-12 border-b"/>}
            <div className="h-[calc(100%-192px)] m-4 flex flex-col justify-around">
                <div className="flex gap-x-2 overflow-hidden">
                    <PostCategoryDiv categories={post.categories}/>
                </div>
                <div className="font-semibold h-12 line-clamp-2">
                    {post.title}
                </div>
                <div className="text-gray-500 h-12 line-clamp-2"
                     dangerouslySetInnerHTML={{__html: safeContentWithoutImg}}/>
                <div>
                    <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-400">
                            {dateToKorean(post.createdAt)}
                        </div>
                        <div className="text-sm font-normal">
                            {post.author}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostCard;