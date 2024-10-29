function PostCategoryDiv({categories}: {categories: string[]}) {
    return (
        <div>
            {categories.map((category: string) => (
                <div className="bg-black text-white font-light text-sm rounded px-2 py-1"   >
                    {category}
                </div>
            ))}
        </div>
    );
}

export default PostCategoryDiv;