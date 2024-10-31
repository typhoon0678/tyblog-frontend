import BasicLayout from "../components/BasicLayout.tsx";
import {Editor} from "@tinymce/tinymce-react";
import {useEffect, useState} from "react";
import {getCategories} from "../api/category.tsx";
import {CategoryResponse, WritePostType} from "../api/types/postType.tsx";
import Category from "../components/Category.tsx";
import MainSmallFillButton from "../components/MainSmallFillButton.tsx";
import {createPost, uploadImage} from "../api/post.tsx";
import {useBlocker, useNavigate} from "react-router-dom";

function WritePostPage() {

    const navigate = useNavigate();

    const [post, setPost] = useState<WritePostType>({
        categoryIds: [],
        title: "",
        content: "",
    });

    const [exitPage, setExitPage] = useState(false);

    // 뒤로가기 방지
    useBlocker(() => {
            return (!!post.title || !!post.content) &&
                exitPage &&
                !confirm("페이지를 이동하시겠습니까?\n\n작성중인 내용이 저장되지 않습니다.");
        }
    );

    // 새로고침 방지
    useEffect(() => {
        const handleBeforeUnload = (event: BeforeUnloadEvent) => {
            event.preventDefault();
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    const [categories, setCategories] = useState<CategoryResponse[]>([]);

    useEffect(() => {
        getCategories()
            .then((res) => setCategories(res.data))
            .catch(() => alert("문제가 발생했습니다. 페이지를 새로고침 해주세요."));
    }, []);

    const handleCategory = (id: number) => {
        if (!post.categoryIds.includes(id)) {
            setPost({...post, categoryIds: [...post.categoryIds, id]})
        } else {
            setPost({...post, categoryIds: post.categoryIds.filter(existId => existId !== id)})
        }
    }

    const handleSubmit = () => {
        createPost(post)
            .then(() => {
                alert("작성되었습니다.");
                setExitPage(true);
                navigate("/");
            })
    }

    return (
        <BasicLayout>
            <div className="my-4">
                <input
                    className="border-b border-gray-300 text-gray-900 text-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-4"
                    onChange={(e) =>
                        setPost({...post, title: e.currentTarget.value})}
                    placeholder="제목"/>
            </div>
            <div className="flex flex-wrap my-4">
                {categories.map(category =>
                    <Category key={category.id}
                              onClick={() => handleCategory(category.id)}
                              category={category}
                              selectCategoryId={post.categoryIds}/>
                )}
            </div>
            <div className="h-[calc(100vh-240px)]">
                <Editor
                    apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
                    init={{
                        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
                        autoresize: false,
                        menubar: false,
                        statusbar: false,
                        inline_boundaries: false,
                        toolbar: 'undo redo | h1 h2 h3 h4 | bold italic underline strikethrough | align lineheight | checklist numlist bullist indent outdent | blockquote link code',
                        placeholder: "내용을 작성해주세요.",
                        file_picker_types: "image",
                        images_upload_handler: async (blobInfo) => {
                            const res = await uploadImage(blobInfo);
                            return res.data.url;
                        }
                    }}
                    value={post.content}
                    onEditorChange={(content) => setPost({...post, content: content})}
                />
            </div>
            <div className="flex justify-end items-center w-full mt-4">
                <MainSmallFillButton text="게시하기" onClick={handleSubmit}/>
            </div>
        </BasicLayout>
    );
}

export default WritePostPage;