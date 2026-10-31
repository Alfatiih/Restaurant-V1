import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Chapter from "../components/Chapter";
import { rooms, roomsFor, type RoomId } from "../data";
import { useTitle } from "../useTitle";

const photos: Record<RoomId, { src: string; alt: string }> = {
  depan: {
    src: "/images/hero-room.jpg",
    alt: "Ruang depan dengan enam meja linen",
  },
  sudut: {
    src: "/images/alcove.jpg",
    alt: "Sudut buku, meja untuk dua di samping rak",
  },
  pelataran: {
    src: "/images/courtyard.jpg",
    alt: "Pelataran dengan dua meja di bawah kamboja",
  },
  panjang: {
    src: "/images/private-room.jpg",
    alt: "Ruang panjang, satu meja untuk sepuluh",
  },
};

export default function Ruang() {
  useTitle("Ruang — Nussanies");
  const [guests, setGuests] = useState(2);
  const fits = useMemo(() => roomsFor(guests), [guests]);
  const [active, setActive] = useState<RoomId>("depan");
  const current = rooms.find((r) => r.id === active) ?? rooms[0];
  const photo = photos[current.id];

  return (
    <>
      <Chapter
        index="III"
        kicker="Ruang"
        title="Delapan belas kursi, empat cara duduk."
        en="Eighteen seats, four ways to sit."
        dek="Kami tidak menggabungkan meja. Jika rombongan Anda tidak muat di satu ruang, malam itu belum waktunya."
      />

      <section className="border-b border-line">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 py-8 md:flex-row md:items-end md:justify-between md:px-10">
          <div>
            <p className="label">Berapa orang</p>
            <p className="mt-2 font-serif text-5xl italic">{guests}</p>
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Jumlah tamu">
            {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                type="button"
                aria-pressed={guests === n}
                onClick={() => {
                  setGuests(n);
                  const next = roomsFor(n)[0];
                  if (next) setActive(next.id);
                }}
                className="choice min-w-11 px-0 py-2 text-center"
              >
                {n}
              </button>
            ))}
          </div>
        </div>
        <p className="mx-auto max-w-[1440px] px-5 pb-8 text-sm text-mute md:px-10">
          {fits.length === 0
            ? "Untuk jumlah ini tidak ada ruang. Maksimum sepuluh, di ruang panjang."
            : `Untuk ${guests} tamu: ${fits.map((r) => r.name.toLowerCase()).join(", ")}.`}
        </p>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-[1440px] md:grid-cols-12">
          <div className="border-b border-line md:col-span-4 md:border-b-0 md:border-r">
            {rooms.map((room) => {
              const ok = fits.some((r) => r.id === room.id);
              return (
                <button
                  key={room.id}
                  type="button"
                  onClick={() => setActive(room.id)}
                  className={`flex w-full items-baseline justify-between gap-4 border-b border-line px-5 py-6 text-left last:border-b-0 md:px-10 ${
                    active === room.id ? "bg-ink text-paper" : "hover:bg-linen/60"
                  }`}
                >
                  <span>
                    <span className="block font-serif text-2xl italic md:text-3xl">{room.name}</span>
                    <span className={`mt-1 block text-sm ${active === room.id ? "text-paper/70" : "text-mute"}`}>
                      {room.seats}
                    </span>
                  </span>
                  <span className={`label ${active === room.id ? "text-paper/60" : ""} ${ok ? "" : "line-through"}`}>
                    {ok ? "Muat" : "Tidak"}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="md:col-span-8">
            <img src={photo.src} alt={photo.alt} className="aspect-[16/10] w-full object-cover" />
            <div className="grid gap-6 px-5 py-8 md:grid-cols-[1fr_auto] md:px-10 md:py-10">
              <div>
                <p className="label">{current.seats}</p>
                <p className="mt-3 max-w-lg text-[1.05rem]">{current.note}</p>
              </div>
              <Link
                to={`/meja?ruang=${current.id}&tamu=${guests}`}
                className="btn-ink h-fit self-end"
              >
                Minta {current.name.toLowerCase()}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-16 md:grid-cols-12 md:px-10 md:py-24">
          <figure className="md:col-span-5">
            <img
              src="/images/passage.jpg"
              alt="Lorong rumah menuju ruang makan, cahaya sore di lantai teraso"
              className="aspect-[3/4] w-full object-cover"
            />
          </figure>
          <div className="md:col-span-6 md:col-start-7">
            <p className="label">Sebelum Anda duduk</p>
            <h2 className="display mt-4 text-5xl">Lorongnya sempit. Itu bagian dari rumah.</h2>
            <ul className="mt-8 space-y-5 text-[1.02rem]">
              <li className="border-t border-line pt-5">
                Jas dan dasi tidak diperlukan. Sandal jepit, kami minta diganti — ada alas kaki kain di pintu.
              </li>
              <li className="border-t border-line pt-5">
                Kursi roda muat di ruang depan, satu meja di dekat pintu. Beri tahu kami saat meminta meja.
              </li>
              <li className="border-t border-line pt-5">
                Ruang panjang punya pintu. Jika Anda menutupnya, pelayan mengetuk. Tidak ada layar, tidak ada mikrofon.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
