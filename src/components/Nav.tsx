import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const links = [
  { to: "/rumah", label: "Rumah" },
  { to: "/menu", label: "Menu" },
  { to: "/ruang", label: "Ruang" },
  { to: "/meja", label: "Meja" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-line bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:px-10">
        <Link to="/" className="font-serif text-[1.35rem] italic leading-none tracking-tight">
          Nussanies
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Utama">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-[0.78rem] tracking-[0.14em] uppercase ${
                  isActive ? "text-ink" : "text-mute hover:text-ink"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/meja" className="hidden text-[0.78rem] tracking-[0.14em] uppercase md:inline link-quiet">
            Minta meja
          </Link>
          <button
            type="button"
            className="relative h-10 w-10 md:hidden"
            aria-expanded={open}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`absolute left-2 right-2 h-px bg-ink transition ${open ? "top-1/2 rotate-45" : "top-[15px]"}`}
            />
            <span
              className={`absolute left-2 right-2 h-px bg-ink transition ${open ? "top-1/2 -rotate-45" : "top-[24px]"}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 top-16 z-30 bg-paper px-6 pb-10 pt-8 md:hidden">
          <p className="label">Isi rumah</p>
          <ul className="mt-6 space-y-1">
            {links.map((link, i) => (
              <li key={link.to} className="border-b border-line">
                <NavLink to={link.to} className="flex items-baseline justify-between py-4">
                  <span className="font-serif text-4xl italic">{link.label}</span>
                  <span className="label">0{i + 1}</span>
                </NavLink>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-xs text-sm text-mute">
            Jl. Teuku Cik Ditiro No. 18, Menteng. Selasa–Sabtu, dua sesi.
          </p>
        </div>
      )}
    </header>
  );
}
