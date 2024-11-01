import {CategoryResponse} from "../api/types/postType.tsx";

function Category({onClick, category, selectCategoryId}: {
    onClick: () => void,
    category: CategoryResponse,
    selectCategoryId: number[]
}) {
    return (
        <button className={`${selectCategoryId.includes(category.id)
            ? "border border-indigo-600 bg-indigo-600 text-white" : "border"} px-4 py-1.5 m-2 rounded-lg`}
                onClick={onClick}>
            {category.name}
        </button>
    );
}

export default Category;