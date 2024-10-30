import BasicLayout from "../components/BasicLayout.tsx";
import PostCard from "../components/PostCard.tsx";
import {useEffect, useState} from "react";
import {getRecentPosts} from "../api/post.tsx";
import {Post} from "../api/types/postType.tsx";

function MainPage() {

    const [pageInfo, setPageInfo] = useState({
        page: 0,
        size: 12,
    });
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        getRecentPosts(pageInfo.page, pageInfo.size)
            .then((res) => {
                setPosts([...posts, ...res.data.content])
            });
    }, [pageInfo.page]);

    return (
        <BasicLayout>
            <div className="text-xl font-bold px-2 py-8 text-center">
                최근 올라온 게시글
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
                {posts.map((post) => (
                    <PostCard key={post.id} post={post}/>
                ))}
            </div>
        </BasicLayout>
    );
}

export default MainPage;