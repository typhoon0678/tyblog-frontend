import BasicLayout from "../components/BasicLayout.tsx";
import PostCard from "../components/PostCard.tsx";
import {useEffect, useRef, useState} from "react";
import {getRecentPosts} from "../api/post.tsx";
import {Post} from "../api/types/postType.tsx";
import useInfiniteScroll from "../utils/useInfiniteScroll.tsx";

function MainPage() {

    const [posts, setPosts] = useState<Post[]>([]);

    const target = useRef<HTMLDivElement>(null);
    const {page} = useInfiniteScroll({
        target: target,
        targetArray: posts,
        threshold: 0.5,
        endPoint: 4,
    });
    const pageSize = 12;

    useEffect(() => {
        getRecentPosts(page, pageSize)
            .then((res) => {
                setPosts([...posts, ...res.data.content])
            });
    }, [page]);

    return (
        <BasicLayout>
            <div className="text-xl font-bold px-2 py-8 text-center">
                최근 올라온 게시글
            </div>
            <div ref={target}
                 className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
                {posts.map((post: Post) =>
                    <PostCard key={post.id} post={post}/>
                )}
            </div>
        </BasicLayout>
    );
}

export default MainPage;