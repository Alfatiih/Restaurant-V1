import { Link } from "react-router-dom";
import { dishes, house, menuWindow, prices, serviceFor } from "../data";
import { useTitle } from "../useTitle";

export default function Home() {
  useTitle("Nussanies — Rumah makan, Menteng");
  const today = serviceFor(new Date());
  const featured = dishes.filter((d) => d.inShort);

  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-x-8 gap-y-2 px-5 pb-4 pt-20 text-[0.72rem] tracking-[0.16em] uppercase text-mute md:px-10 md:pt-24">
          <span>Menteng</span>
          <span className="hidden sm:inline">{house.covers} kursi</span>
          <span>Selasa — Sabtu</span>
          <span>{today.label}</span>
        </div>

        <div className="mx-auto grid max-w-[1440px] items-end gap-8 px-5 pb-8 md:grid-cols-12 md:px-10 md:pb-12">
          <div className="md:col-span-7">
            <p className="label">Edisi hujan</p>
            <h1 className="display mt-4 text-[clamp(3.2rem,8vw,7.2rem)]">
              Malam ini,
              <br />
              <span className="italic">tujuh piring.</span>
            </h1>
          </div>
          <div className="md:col-span-4 md:col-start-9 md:pb-3">
            <p className="text-[1.05rem] text-ink/90">
              Nussanies adalah rumah makan di Menteng. Satu menu, dua sesi, pintu tanpa papan nama. Kami memasak laut utara dan kebun dekat, di rumah yang dibangun tahun {house.year}.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link to="/meja" className="btn-ink">
                Minta meja
              </Link>
              <Link to="/menu" className="link-quiet text-sm">
                Lihat menu minggu ini
              </Link>
            </div>
          </div>
        </div>

        <figure className="mx-auto grid max-w-[1440px] gap-3 px-5 pb-10 md:grid-cols-12 md:px-10">
          <img
            src="/images/hero-room.jpg"
            alt="Ruang depan Nussanies, enam meja linen dan jendela jati sore hari"
            className="aspect-[16/9] w-full object-cover md:col-span-10"
          />
          <figcaption className="flex items-end text-sm text-mute md:col-span-2 md:pb-1">
            Ruang depan, sekitar pukul 17.40. Lampu dinyalakan sebelum tamu pertama datang.
          </figcaption>
        </figure>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-[1440px] md:grid-cols-12">
          <div className="border-b border-line px-5 py-10 md:col-span-4 md:border-b-0 md:border-r md:px-10 md:py-14">
            <p className="label">Menu berjalan</p>
            <p className="mt-4 font-serif text-3xl italic leading-tight md:text-4xl">{menuWindow}</p>
            <p className="mt-5 text-sm text-mute">
              Selasa dan Rabu, empat hidangan — Rp {prices.short}. Kamis sampai Sabtu, tujuh hidangan — Rp {prices.long}. Harga per orang, belum termasuk minuman.
            </p>
            <Link to="/menu" className="link-quiet mt-6 text-sm">
              Seluruh daftar
            </Link>
          </div>
          <ol className="md:col-span-8">
            {featured.map((dish, i) => (
              <li
                key={dish.id}
                className={`grid grid-cols-[3.2rem_1fr] gap-4 px-5 py-6 md:grid-cols-[5rem_1fr_auto] md:items-baseline md:px-10 ${
                  i !== featured.length - 1 ? "border-b border-line" : ""
                }`}
              >
                <span className="font-serif text-2xl italic text-mute">{dish.index}</span>
                <div>
                  <p className="text-[1.05rem]">{dish.name}</p>
                  <p className="text-sm italic text-mute">{dish.en}</p>
                </div>
                <span className="hidden text-sm text-mute md:block">{dish.course}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-[1440px] md:grid-cols-12">
          <figure className="md:col-span-7">
            <img
              src="/images/still-life.jpg"
              alt="Kakap, serai, jeruk, daun jeruk, dan kelapa muda di atas meja jati"
              className="h-full max-h-[720px] w-full object-cover"
            />
          </figure>
          <div className="flex flex-col justify-between px-5 py-12 md:col-span-5 md:px-12 md:py-16">
            <div>
              <p className="label">01 — Dapur</p>
              <h2 className="display mt-4 text-5xl md:text-6xl">
                Laut di<br />pagi hari.
              </h2>
              <p className="mt-6 max-w-md text-[1.05rem]">
                Ikan datang dari Pelabuhan Ratu sebelum pukul sembilan. Sayur dari kebun di Bogor, dua kali seminggu. Yang tidak segar, tidak naik ke piring — kami memendekkan menu, bukan mengganti dengan stok beku.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-6 border-t border-line pt-6 text-sm">
              <div>
                <p className="label">Koki</p>
                <p className="mt-2">Laras Widjaja</p>
              </div>
              <div>
                <p className="label">Minuman</p>
                <p className="mt-2">Arka Mahendra</p>
              </div>
              <div>
                <p className="label">Kursi</p>
                <p className="mt-2">{house.covers}, tidak lebih</p>
              </div>
              <div>
                <p className="label">Rumah</p>
                <p className="mt-2">Dibangun {house.year}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 md:grid-cols-12 md:px-10 md:py-20">
          <div className="md:col-span-4">
            <p className="label">02 — Cara duduk</p>
            <h2 className="display mt-4 text-5xl">Dua sesi. Tidak lebih.</h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <div className="grid gap-0 border-t border-line">
              {[
                ["18.00", "Sesi pertama", "Meja dilepas sekitar pukul 20.15. Cocok jika Anda masih ingin berjalan setelah makan."],
                ["20.30", "Sesi kedua", "Sesi yang lebih tenang. Pintu ditutup pukul 23.30, lampu ruang depan dimatikan lebih dulu."],
                ["Senin", "Dapur tutup", "Senin dan Minggu rumah tidak menerima tamu. Staf belanja dan mencuci linen."],
              ].map(([time, title, note]) => (
                <div key={time} className="grid gap-2 border-b border-line py-6 sm:grid-cols-[7rem_1fr] sm:gap-6">
                  <p className="font-serif text-2xl italic">{time}</p>
                  <div>
                    <p>{title}</p>
                    <p className="mt-1 text-sm text-mute">{note}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/ruang" className="link-quiet mt-8 text-sm">
              Empat ruang, dan siapa yang muat di mana
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-olive text-paper">
        <div className="mx-auto grid max-w-[1440px] md:grid-cols-12">
          <div className="px-5 py-14 md:col-span-5 md:px-10 md:py-20">
            <p className="label text-paper/60">03 — Pelataran</p>
            <h2 className="display mt-4 text-5xl md:text-6xl">Dua meja di bawah kamboja.</h2>
            <p className="mt-6 max-w-md text-paper/85">
              Hanya jika malam tidak hujan. Kami tidak menjanjikan pelataran sampai siang hari yang sama — langit Jakarta lebih jujur daripada reservasi.
            </p>
            <Link to="/meja" className="mt-8 inline-flex border-b border-paper pb-0.5 text-sm hover:text-linen">
              Tulis permintaan Anda
            </Link>
          </div>
          <figure className="md:col-span-7">
            <img
              src="/images/courtyard.jpg"
              alt="Pelataran sore hari, dua meja linen di bawah pohon kamboja"
              className="h-full min-h-[320px] w-full object-cover"
            />
          </figure>
        </div>
      </section>

      <section>
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 py-16 md:flex-row md:items-end md:justify-between md:px-10 md:py-20">
          <div>
            <p className="label">Surat, bukan aplikasi</p>
            <p className="display mt-3 text-4xl md:text-6xl">
              Meja dikonfirmasi<br />dalam satu hari.
            </p>
          </div>
          <div className="max-w-sm text-sm text-mute">
            <p>
              {house.street}, {house.area}. Jika Anda sudah di depan pintu dan ragu, itu rumah yang benar — tidak ada papan nama.
            </p>
            <a href={house.phoneHref} className="link-quiet mt-4 text-ink">
              {house.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
