function PostCategoryDiv({categories}: { categories: string[] }) {
    return (
        <div>
            {categories.length > 0 && categories.map((category: string) => (
                <div className="bg-black text-white font-light text-sm rounded px-2 py-1">
                    {category}
                </div>
            ))}
            {categories.length === 0 &&
                <div className="h-8"/>}
        </div>
    );
}

export default PostCategoryDiv;