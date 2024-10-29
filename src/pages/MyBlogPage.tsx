import {useParams} from "react-router-dom";
import BasicLayout from "../components/BasicLayout.tsx";
import PostCard from "../components/PostCard.tsx";
import Category from "../components/Category.tsx";

function MyBlogPage() {

    const {username} = useParams();

    return (
        <BasicLayout>
            <div className="bg-gray-50 flex flex-col justify-around items-center py-8">
                <h1 className="font-bold text-3xl text-center">{username}'s Blog</h1>
                <div className="mt-6 text-center text-gray-500 font-normal">description</div>
            </div>
            <div className="flex flex-wrap justify-center my-8">
                <Category/>
                <Category/>
                <Category/>
                <Category/>
                <Category/>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
            </div>
        </BasicLayout>
    );
}

export default MyBlogPage;