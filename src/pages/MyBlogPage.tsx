import {useParams} from "react-router-dom";
import BasicLayout from "../components/BasicLayout.tsx";
import PostCard from "../components/PostCard.tsx";
import Category from "../components/Category.tsx";
import {useState} from "react";

function MyBlogPage() {

    const {username} = useParams();

    const [selectCategory, setSelectCategory] = useState<string>("Select All");

    return (
        <BasicLayout>
            <div className="bg-gray-50 flex flex-col justify-around items-center py-8">
                <h1 className="font-bold text-3xl text-center">{username}'s Blog</h1>
                <div className="mt-6 text-center text-gray-500 font-normal">description</div>
            </div>
            <div className="flex flex-wrap justify-center my-8">
                <Category onClick={() => setSelectCategory("Select All")} category="Select All" selectCategory={selectCategory}/>
                <Category onClick={() => setSelectCategory("Spring")} category="Spring" selectCategory={selectCategory}/>
                <Category onClick={() => setSelectCategory("DB")} category="DB" selectCategory={selectCategory}/>
                <Category onClick={() => setSelectCategory("React")} category="React" selectCategory={selectCategory}/>
                <Category onClick={() => setSelectCategory("AWS")} category="AWS" selectCategory={selectCategory}/>
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