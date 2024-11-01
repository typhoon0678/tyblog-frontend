import BasicLayout from "../components/BasicLayout.tsx";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {getPost} from "../api/post.tsx";
import {Post} from "../api/types/postType.tsx";
import {fullDateToKorean} from "../utils/dateUtil.tsx";
import DOMPurify from "dompurify";
import PostCategoryDiv from "../components/PostCategoryDiv.tsx";

function PostPage() {

    const {id} = useParams();

    const navigate = useNavigate();

    const [post, setPost] = useState<Post>({
        id: 0,
        title: "",
        content: "",
        author: "",
        categories: [],
        createdAt: new Date,
        updatedAt: new Date,
    });

    useEffect(() => {
        getPost(Number(id))
            .then((res) => setPost(res.data))
            .catch(() => alert("데이터를 불러오는데 실패했습니다. 다시 시도해주세요."))
    }, []);

    const safeContent = DOMPurify.sanitize(post.content);

    return (
        <BasicLayout>
            <div className="max-w-4xl mx-auto px-8">
                <div className="py-12 text-center">
                    <h2 className="break-words text-4xl font-bold leading-loose">
                        {post.title}
                    </h2>
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <div className="text-gray-600 font-normal">
                            {fullDateToKorean(post.createdAt)}
                        </div>
                    </div>
                    <button className="text-indigo-600 font-bold text-lg my-4"
                            onClick={() => navigate(`/blog/${post.author}`)}>
                        {post.author}
                    </button>
                </div>
                <div className="flex">
                    <PostCategoryDiv categories={post.categories} size="large"/>
                </div>
                <hr className="my-8"/>
                <div className=""
                     dangerouslySetInnerHTML={{__html: safeContent}}/>
            </div>
        </BasicLayout>
    );
}

export default PostPage;