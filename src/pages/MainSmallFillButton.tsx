function MainSmallFillButton({text, onClick}: {text: string, onClick: () => void}) {
    return (
        <button className="rounded-lg bg-indigo-600 text-white px-4 py-1.5"
                onClick={onClick}>
            {text}
        </button>
    );
}

export default MainSmallFillButton;