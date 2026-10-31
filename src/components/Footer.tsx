import { Link } from "react-router-dom";
import { house } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-14 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <p className="font-serif text-4xl italic">Nussanies</p>
          <p className="mt-3 max-w-sm text-sm text-mute">
            Rumah makan untuk delapan belas tamu. Satu menu, dua sesi, pintu tanpa papan nama.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="label">Alamat</p>
          <p className="mt-3 text-sm">
            {house.street}
            <br />
            {house.area}
          </p>
          <p className="mt-4 text-sm">
            <a href={house.phoneHref} className="link-quiet">
              {house.phone}
            </a>
          </p>
        </div>
        <div className="md:col-span-2">
          <p className="label">Halaman</p>
          <ul className="mt-3 space-y-1.5 text-sm">
            <li><Link to="/rumah" className="hover:text-copper">Rumah</Link></li>
            <li><Link to="/menu" className="hover:text-copper">Menu</Link></li>
            <li><Link to="/ruang" className="hover:text-copper">Ruang</Link></li>
            <li><Link to="/meja" className="hover:text-copper">Meja</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="label">Surat</p>
          <p className="mt-3 text-sm">
            <a href={`mailto:${house.email}`} className="hover:text-copper">
              {house.email}
            </a>
          </p>
          <p className="mt-3 text-sm text-mute">{house.instagram}</p>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1440px] flex-col gap-2 border-t border-line px-5 py-5 text-xs text-mute md:flex-row md:items-center md:justify-between md:px-10">
        <p>Edisi hujan · Oktober 2026</p>
        <p>Disusun seperti buku rumah, bukan seperti brosur.</p>
      </div>
    </footer>
  );
}
