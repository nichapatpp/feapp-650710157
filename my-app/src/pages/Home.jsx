import MovieCard from "../components/MovieCard";
import MovieGallery from "../components/MovieGallery";

function Home() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-10">

      <div className="text-center">
        <h1 className="text-4xl font-bold">🏠 หน้าแรก</h1>
        <p className="mt-4 text-xl text-slate-500">
          ยินดีต้อนรับสู่ MovieHub
        </p>
      </div>

      {/* ตัวอย่าง Like */}
      <div className="mt-10">
        <h2 className="mb-6 text-xl font-bold text-slate-400">
          ผลลัพธ์บนหน้าเว็บ (กดแล้วเลขเพิ่มทันที)
        </h2>

        <MovieCard title="Parasite" year="2019" />
      </div>

      {/* ตัวอย่าง Movie Gallery */}
      <div className="mt-10">
        <h2 className="mb-6 text-xl font-bold text-slate-400">
          ผลลัพธ์บนหน้าเว็บ
        </h2>

        <MovieGallery />
      </div>

    </div>
  );
}

export default Home;