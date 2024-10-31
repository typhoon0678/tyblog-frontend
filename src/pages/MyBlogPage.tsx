import {useParams} from "react-router-dom";
import BasicLayout from "../components/BasicLayout.tsx";
import PostCard from "../components/PostCard.tsx";
import Category from "../components/Category.tsx";
import {useEffect, useRef, useState} from "react";
import {getCategories} from "../api/category.tsx";
import {CategoryResponse, Post} from "../api/types/postType.tsx";
import {getMemberPosts} from "../api/post.tsx";
import useInfiniteScroll from "../utils/useInfiniteScroll.tsx";

function MyBlogPage() {

    const {username} = useParams();

    const [categories, setCategories] = useState<CategoryResponse[]>([]);
    const [selectCategory, setSelectCategory] = useState<number[]>([0]);
    const [posts, setPosts] = useState<Post[]>([]);
    const [trigger, setTrigger] = useState<boolean>(true);

    const target = useRef<HTMLDivElement>(null);
    const {page, setPage} = useInfiniteScroll({
        target: target,
        targetArray: posts,
        threshold: 0.5,
        endPoint: 4,
    });
    const pageSize = 12;

    useEffect(() => {
        getCategories()
            .then((res) => setCategories(res.data))
    }, []);

    useEffect(() => {
        getMemberPosts(username || "", selectCategory[0], page, pageSize)
            .then((res) => setPosts([...posts, ...res.data.content]))
    }, [page, trigger]);

    useEffect(() => {
        setPosts([]);
        setPage(0);
        setTrigger(prev => !prev);
    }, [selectCategory]);

    const selectAll: CategoryResponse = {
        id: 0,
        name: "전체"
    }

    return (
        <BasicLayout>
            <div className="bg-gray-50 flex flex-col justify-around items-center py-8">
                <h1 className="font-bold text-3xl text-center">{username}'s Blog</h1>
                {/*<div className="mt-6 text-center text-gray-500 font-normal">description</div>*/}
            </div>
            <div className="flex flex-wrap justify-center my-8">
                <Category key={selectAll.id}
                          onClick={() => setSelectCategory([selectAll.id])}
                          category={selectAll}
                          selectCategoryId={selectCategory}/>
                {categories.map((category: CategoryResponse) => (
                    <Category key={category.id}
                              onClick={() => setSelectCategory([category.id])}
                              category={category}
                              selectCategoryId={selectCategory}/>
                ))}
            </div>
            <div ref={target}
                 className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
                {posts.map((post) => (
                    <PostCard key={post.id} post={post}/>
                ))}
            </div>
        </BasicLayout>
    );
}

export default MyBlogPage;