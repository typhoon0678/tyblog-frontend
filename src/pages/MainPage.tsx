import BasicLayout from "../components/BasicLayout.tsx";
import PostCard from "../components/PostCard.tsx";

function MainPage() {
    return (
        <BasicLayout>
            <div className="text-xl font-bold px-2 py-8 text-center">
                최근 올라온 게시글
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

export default MainPage;