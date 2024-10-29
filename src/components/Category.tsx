function Category({onClick, category, selectCategory}: {
    onClick: () => void,
    category: string,
    selectCategory: string
}) {
    return (
        <button className={`${selectCategory === category ? "bg-indigo-600 text-white" : ""} px-4 py-1.5 m-2 rounded-lg`}
                onClick={onClick}>
            {category}
        </button>
    );
}

export default Category;