function MainSmallButton({text, onClick}: { text: string, onClick: () => void }) {
    return (
        <button className="text-indigo-600 font-normal"
                onClick={onClick}>
            {text}
        </button>
    );
}

export default MainSmallButton;