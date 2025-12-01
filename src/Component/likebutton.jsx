import { useEffect, useState } from "react";

export default function LikeButton() {
    const [likeCount, setLikeCount] = useState(0);
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        const savedCount = localStorage.getItem("likeCount");
        const savedLiked = localStorage.getItem("alreadyLiked");

        if (savedCount) setLikeCount(parseInt(savedCount));
        if (savedLiked === "true") setLiked(true);
    }, []);

    const handleLike = () => {
        if (liked) return; 

        const newCount = likeCount + 1;
        setLikeCount(newCount);
        setLiked(true);

        localStorage.setItem("likeCount", newCount);
        localStorage.setItem("alreadyLiked", "true");
    };

    return (
        <div className=" border">
            <button
                onClick={handleLike}
                disabled={liked}
                className={`px-6 py-3 text-white text-lg rounded-xl transition flex items-center gap-2
                    ${liked ? "bg-gray-400 cursor" : "bg-red-500 hover:bg-red-600"}
                `}
                >
                {liked ? "❤️" : "🤍"}

                <p className="text-xl font-semibold">
                {likeCount}
                </p>
            </button>
        </div>
    );
}
