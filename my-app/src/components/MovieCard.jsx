import { useState } from "react";

function MovieCard({ title, year }) {
  const [likes, setLikes] = useState(7);

  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">
      <h3 className="text-lg font-bold">
        {title} ({year})
      </h3>

      <button
        onClick={() => setLikes(likes + 1)}
        className="mt-3 rounded-lg bg-pink-100 px-4 py-2
                   font-semibold text-pink-700 hover:bg-pink-200 transition"
      >
        ❤️ {likes}
      </button>
    </div>
  );
}

export default MovieCard;