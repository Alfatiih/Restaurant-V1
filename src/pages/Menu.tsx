import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Chapter from "../components/Chapter";
import { dishes, menuWindow, prices, wines } from "../data";
import { useTitle } from "../useTitle";

export default function Menu() {
  useTitle("Menu — Nussanies");
  const [length, setLength] = useState<"short" | "long">("long");
  const [pairing, setPairing] = useState<"none" | "wine" | "soft">("none");

  const shown = useMemo(
    () => (length === "short" ? dishes.filter((d) => d.inShort) : dishes),
    [length],
  );

  const food = length === "short" ? prices.short : prices.long;
  const drink =
    pairing === "wine"
      ? length === "short"
        ? prices.pairShort
        : prices.pairLong
      : pairing === "soft"
        ? prices.soft
        : null;

  const total = drink
    ? (Number(food.replace(/\./g, "")) + Number(drink.replace(/\./g, ""))).toLocaleString("id-ID")
    : null;

  return (
    <>
      <Chapter
        index="II"
        kicker="Menu"
        title="Satu daftar. Dua panjang."
        en="One list. Two lengths."
        dek={`Berlaku ${menuWindow}. Menu tidak dicetak di meja — pelayan akan menyebutnya, perlahan, sebelum piring pertama.`}
      />

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-8 md:grid-cols-12 md:items-end md:px-10">
          <div className="md:col-span-5">
            <p className="label">Panjang malam</p>
            <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Panjang menu">
              <button type="button" className="choice" aria-pressed={length === "short"} onClick={() => setLength("short")}>
                <span className="block text-sm">Selasa · Rabu</span>
                <span className="mt-1 block font-serif text-2xl italic">Empat hidangan</span>
              </button>
              <button type="button" className="choice" aria-pressed={length === "long"} onClick={() => setLength("long")}>
                <span className="block text-sm">Kamis · Sabtu</span>
                <span className="mt-1 block font-serif text-2xl italic">Tujuh hidangan</span>
              </button>
            </div>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="text-sm text-mute">
              {length === "short"
                ? "Versi pendek mengambil empat piring dari daftar yang sama — bukan menu lain."
                : "Versi penuh berjalan dari tiram sampai gula aren, dengan jeda keju yang boleh dilewati."}
            </p>
          </div>
        </div>
      </section>

      <section>
        <ol>
          {shown.map((dish) => (
            <li key={dish.id} className="border-b border-line">
              <article className="mx-auto grid max-w-[1440px] gap-6 px-5 py-10 md:grid-cols-12 md:px-10 md:py-14">
                <div className="md:col-span-2">
                  <p className="font-serif text-4xl italic text-mute">{dish.index}</p>
                  <p className="label mt-3">{dish.course}</p>
                </div>
                <div className={dish.image ? "md:col-span-5" : "md:col-span-8"}>
                  <h2 className="font-serif text-3xl leading-tight md:text-4xl">{dish.name}</h2>
                  <p className="mt-2 italic text-mute">{dish.en}</p>
                  <p className="mt-5 max-w-md text-[1.02rem]">{dish.note}</p>
                </div>
                {dish.image && (
                  <figure className="md:col-span-5">
                    <img src={dish.image} alt={dish.name} className="aspect-[4/3] w-full object-cover" />
                  </figure>
                )}
              </article>
            </li>
          ))}
        </ol>
      </section>

      <section id="minuman" className="scroll-mt-20 border-b border-line bg-[#efe8dc]">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 md:grid-cols-12 md:px-10 md:py-20">
          <div className="md:col-span-4">
            <p className="label">Minuman</p>
            <h2 className="display mt-4 text-5xl">Enam gelas yang selalu ada.</h2>
            <p className="mt-5 text-sm text-mute">
              Daftar penuh ada di rak, sekitar tiga puluh botol. Yang di bawah ini tidak pernah habis di minggu biasa. Harga dalam ribuan rupiah.
            </p>
            <figure className="mt-8">
              <img
                src="/images/wine.jpg"
                alt="Anggur merah dituang ke gelas di atas linen"
                className="aspect-[3/4] w-full max-w-sm object-cover"
              />
            </figure>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <div className="hidden grid-cols-[1fr_5rem_6rem] gap-4 border-b border-line pb-3 text-xs tracking-[0.16em] uppercase text-mute sm:grid">
              <span>Gelas</span>
              <span className="text-right">Gelas</span>
              <span className="text-right">Botol</span>
            </div>
            <ul>
              {wines.map((wine) => (
                <li key={wine.name} className="grid gap-1 border-b border-line py-5 sm:grid-cols-[1fr_5rem_6rem] sm:items-baseline sm:gap-4">
                  <div>
                    <p>{wine.name}</p>
                    <p className="text-sm text-mute">
                      {wine.place} · {wine.note}
                    </p>
                  </div>
                  <p className="sm:text-right">{wine.glass}</p>
                  <p className="text-mute sm:text-right">{wine.bottle}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 md:grid-cols-12 md:px-10 md:py-20">
          <div className="md:col-span-5">
            <p className="label">Hitung malam</p>
            <h2 className="display mt-4 text-5xl">Per orang, sebelum pajak.</h2>
            <p className="mt-5 max-w-md text-sm text-mute">
              Pajak restoran 10% ditambahkan di akhir. Layanan sudah termasuk — kami tidak menerima tip, dan tidak akan tersinggung jika Anda tetap meninggalkannya.
            </p>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="label">Pendamping</p>
            <div className="mt-3 grid gap-2 sm:grid-cols-3" role="group" aria-label="Pendamping minuman">
              {(
                [
                  ["none", "Tanpa", "Air putih"],
                  ["wine", "Anggur", length === "short" ? prices.pairShort : prices.pairLong],
                  ["soft", "Tanpa anggur", prices.soft],
                ] as const
              ).map(([id, label, sub]) => (
                <button
                  key={id}
                  type="button"
                  className="choice"
                  aria-pressed={pairing === id}
                  onClick={() => setPairing(id)}
                >
                  <span className="block text-sm">{label}</span>
                  <span className="mt-1 block text-xs opacity-70">{sub}</span>
                </button>
              ))}
            </div>

            <dl className="mt-8 border-t border-line text-sm">
              <div className="flex items-baseline justify-between border-b border-line py-4">
                <dt>Menu {length === "short" ? "empat" : "tujuh"} hidangan</dt>
                <dd className="font-serif text-2xl italic">Rp {food}</dd>
              </div>
              <div className="flex items-baseline justify-between border-b border-line py-4">
                <dt>Pendamping</dt>
                <dd className="font-serif text-2xl italic">{drink ? `Rp ${drink}` : "—"}</dd>
              </div>
              <div className="flex items-baseline justify-between py-4">
                <dt>Perkiraan</dt>
                <dd className="font-serif text-3xl italic">{total ? `Rp ${total}` : `Rp ${food}`}</dd>
              </div>
            </dl>
            <p className="mt-2 text-xs text-mute">Belum termasuk pajak 10%. Angka ini untuk satu tamu.</p>
            <Link to="/meja" className="btn-ink mt-8">
              Minta meja untuk menu ini
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
