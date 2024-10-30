import {useParams} from "react-router-dom";
import BasicLayout from "../components/BasicLayout.tsx";
import PostCard from "../components/PostCard.tsx";
import Category from "../components/Category.tsx";
import {useEffect, useState} from "react";
import {getCategories} from "../api/category.tsx";
import {CategoryResponse, Post} from "../api/types/postType.tsx";
import {getMemberPosts} from "../api/post.tsx";

function MyBlogPage() {

    const {username} = useParams();

    const [pageInfo, setPageInfo] = useState({
        page: 0,
        size: 12,
    })
    const [categories, setCategories] = useState<CategoryResponse[]>([]);
    const [selectCategory, setSelectCategory] = useState<number[]>([0]);
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        getCategories()
            .then((res) => setCategories(res.data))
    }, []);

    useEffect(() => {
        getMemberPosts(username || "", pageInfo.page, pageInfo.size)
            .then((res) => setPosts([...posts, ...res.data.content]))
    }, []);

    const selectAll: CategoryResponse = {
        id: 0,
        name: "전체"
    }

    return (
        <BasicLayout>
            <div className="bg-gray-50 flex flex-col justify-around items-center py-8">
                <h1 className="font-bold text-3xl text-center">{username}'s Blog</h1>
                <div className="mt-6 text-center text-gray-500 font-normal">description</div>
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
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
                {posts.map((post) => (
                    <PostCard key={post.id} post={post}/>
                ))}
            </div>
        </BasicLayout>
    );
}

export default MyBlogPage;