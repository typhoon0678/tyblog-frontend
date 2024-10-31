function PostCategoryDiv({categories, size = "medium"}: { categories: string[], size?: string }) {

    return (
        <div>
            {categories.length > 0 && categories.map((category: string) => (
                (size === "medium")
                    ? <div key={category} className="bg-black text-white font-light text-sm rounded px-2 py-1">
                        {category}
                    </div>
                    : <div key={category} className="bg-black text-white font-light text-lg rounded px-3 py-1.5">
                        {category}
                    </div>
            ))}
            {categories.length === 0 &&
                <div className={(size === "medium") ? "h-8" : ""}/>}
        </div>
    );
}

export default PostCategoryDiv;