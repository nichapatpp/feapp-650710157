import { NavLink } from 'react-router-dom';

const linkClass = ({ isActive }) =>
  isActive
    ? 'font-semibold text-cyan-400 underline underline-offset-4'
    : 'text-slate-300 transition hover:text-cyan-400';

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-slate-900 px-6 py-4">

      <span className="text-xl font-bold text-white">
        🎬 Movie<span className="text-cyan-400">Hub</span>
      </span>

      <div className="flex items-center gap-6">

        <NavLink to="/" className={linkClass}>
          หน้าแรก
        </NavLink>

        <NavLink to="/movies" className={linkClass}>
          หนังทั้งหมด
        </NavLink>

        <NavLink to="/about" className={linkClass}>
          เกี่ยวกับเรา
        </NavLink>

        <NavLink
          to="/login"
          className="rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-white transition hover:bg-cyan-600"
        >
          เข้าสู่ระบบ
        </NavLink>

      </div>

    </nav>
  );
}

export default Navbar;