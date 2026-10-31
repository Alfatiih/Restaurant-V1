import { Link } from "react-router-dom";
import { useTitle } from "../useTitle";

export default function NotFound() {
  useTitle("Tidak ada halaman ini — Nussanies");
  return (
    <section className="mx-auto max-w-[1440px] px-5 pb-24 pt-32 md:px-10">
      <p className="label">404</p>
      <h1 className="display mt-4 text-6xl md:text-8xl">
        Halaman ini
        <br />
        <span className="italic">tidak ada di rumah.</span>
      </h1>
      <p className="mt-6 max-w-md text-mute">
        Mungkin tautan lama. Menu, ruang, dan meja masih di tempatnya.
      </p>
      <Link to="/" className="btn-ink mt-8">
        Kembali ke depan
      </Link>
    </section>
  );
}
