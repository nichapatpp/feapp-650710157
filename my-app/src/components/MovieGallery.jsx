import { useState } from "react";
import { movies } from "../data/data.js";

function MovieGallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const hasNext = index < movies.length - 1;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }

    // เปลี่ยนเรื่องแล้วซ่อนเรื่องย่อ
    setShowMore(false);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  const movie = movies[index];

  return (
    <div className="mx-auto max-w-2xl rounded-2xl bg-white p-6 shadow-md">

      {/* ปุ่มเรื่องถัดไป */}
      <button
        onClick={handleNextClick}
        className="rounded-lg bg-cyan-600 px-4 py-2 font-semibold text-white
                   hover:bg-cyan-700 transition"
      >
        เรื่องถัดไป
      </button>

      {/* ชื่อหนัง */}
      <h2 className="mt-6 text-2xl font-bold text-slate-800">
        {movie.title}{" "}
        <span className="text-slate-400">
          ({movie.year})
        </span>
      </h2>

      {/* ลำดับและประเภทหนัง */}
      <p className="mt-2 text-sm text-slate-500">
        เรื่องที่ {index + 1} จาก {movies.length} | {movie.genre}
      </p>

      {/* รูปโปสเตอร์ */}
      <div className="mt-4 flex flex-col gap-6 md:flex-row">
        {movie.poster && (
          <img
            src={movie.poster}
            alt={movie.title}
            className="mx-auto h-64 rounded-lg object-cover shadow-md"
          />
        )}
      </div>

      {/* ปุ่มอ่านเรื่องย่อ */}
      <button
        onClick={handleMoreClick}
        className="mt-4 text-sm font-semibold text-cyan-600
                   hover:text-cyan-700"
      >
        {showMore ? "ซ่อนเรื่องย่อ" : "อ่านเรื่องย่อ"}
      </button>

      {/* เรื่องย่อ */}
      {showMore && (
        <p className="mt-3 text-slate-700">
          {movie.detail}
        </p>
      )}

    </div>
  );
}

export default MovieGallery;