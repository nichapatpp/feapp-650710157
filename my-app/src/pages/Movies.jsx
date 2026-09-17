import { useState } from "react";
import { Link } from "react-router-dom";
import { movies } from "../data/data.js";
import SearchBox from "../components/SearchBox.jsx";
import GenreBox from "../components/GenreBox.jsx";

const GENRES = [...new Set(movies.map(m => m.genre))];

function Movies() {
  const [query, setQuery] = useState('');
  const [genre, setGenre] = useState('all');

  //const shown = movies.filter(m => m.title.toLowerCase().includes(query.toLowerCase()));
  const q = query.trim().toLowerCase();
  const shown = movies.filter(m => 
    m.title.toLowerCase().split(' ').some(word => word.startsWith(q)) && (genre === 'all' || m.genre === genre));
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-10">
      <h1 className="mb-6 text-3xl font-bold">🎬 หนังทั้งหมด</h1>
      <SearchBox query={query} setQuery={setQuery} />
      <GenreBox genre={genre} onGenreChange={setGenre} genres={GENRES} ></GenreBox>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((movie) => (
          <div
            key={movie.id}
            className="rounded-2xl bg-white p-6 shadow-md"
          >
            <h3 className="text-lg font-bold">
              {movie.title} ({movie.year})
            </h3>

            <Link
              to={`/movies/${movie.id}`}
              className="mt-4 inline-block text-cyan-600 hover:underline"
            >
              ดูรายละเอียด
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;