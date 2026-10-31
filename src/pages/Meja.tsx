import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { useSearchParams } from "react-router-dom";
import Chapter from "../components/Chapter";
import {
  formatLongDate,
  house,
  rooms,
  roomsFor,
  serviceFor,
  sittings,
  type RoomId,
} from "../data";
import { useTitle } from "../useTitle";

type Form = {
  name: string;
  email: string;
  phone: string;
  date: string;
  sitting: string;
  guests: number;
  room: RoomId | "";
  note: string;
  diet: string;
};

const empty: Form = {
  name: "",
  email: "",
  phone: "",
  date: "",
  sitting: "",
  guests: 2,
  room: "",
  note: "",
  diet: "",
};

function refFor(name: string) {
  const seed = name.replace(/[^a-z]/gi, "").slice(0, 3).toUpperCase() || "NUS";
  const n = Math.abs(
    Array.from(name + Date.now().toString().slice(-4)).reduce((a, c) => a + c.charCodeAt(0), 0),
  );
  return `NS-${seed}-${String(n % 9000 + 1000)}`;
}

export default function Meja() {
  useTitle("Minta meja — Nussanies");
  const [params] = useSearchParams();
  const presetRoom = params.get("ruang") as RoomId | null;
  const presetGuests = Number(params.get("tamu") || 0);

  const [form, setForm] = useState<Form>({
    ...empty,
    guests: presetGuests >= 1 && presetGuests <= 10 ? presetGuests : 2,
    room: presetRoom && rooms.some((r) => r.id === presetRoom) ? presetRoom : "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [ref, setRef] = useState<string | null>(null);

  const dateObj = useMemo(() => {
    if (!form.date) return null;
    const [y, m, d] = form.date.split("-").map(Number);
    return new Date(y, m - 1, d);
  }, [form.date]);

  const service = dateObj ? serviceFor(dateObj) : null;
  const availableRooms = roomsFor(form.guests);

  function set<K extends keyof Form>(key: K, value: Form[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    const next: Partial<Record<keyof Form, string>> = {};
    if (form.name.trim().length < 2) next.name = "Nama perlu lebih dari satu huruf.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Surat elektronik tidak lengkap.";
    if (form.phone.replace(/\D/g, "").length < 8) next.phone = "Nomor terlalu pendek.";
    if (!form.date) next.date = "Pilih tanggal.";
    else if (service?.closed) next.date = "Senin dan Minggu dapur tutup.";
    else {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (dateObj && dateObj < today) next.date = "Tanggal itu sudah lewat.";
    }
    if (!form.sitting) next.sitting = "Pilih sesi.";
    if (!form.room) next.room = "Pilih ruang yang muat.";
    else if (!availableRooms.some((r) => r.id === form.room)) next.room = "Ruang ini tidak muat untuk jumlah tamu.";
    setErrors(next);
    if (Object.keys(next).length) return;
    setRef(refFor(form.name));
  }

  const room = rooms.find((r) => r.id === form.room);
  const sitting = sittings.find((s) => s.id === form.sitting);

  if (ref) {
    return (
      <>
        <Chapter
          index="IV"
          kicker="Meja"
          title="Permintaan Anda sudah kami pegang."
          en="Held, not yet confirmed."
          dek="Ini bukan konfirmasi. Kami membalas lewat surat dalam satu hari kerja. Jika sesi sudah penuh, kami menawarkan tanggal terdekat — bukan daftar tunggu tanpa kabar."
        />
        <section>
          <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-12 md:grid-cols-12 md:px-10 md:py-16">
            <div className="md:col-span-5">
              <p className="label">Nomor permintaan</p>
              <p className="mt-3 font-serif text-5xl italic">{ref}</p>
              <p className="mt-6 text-sm text-mute">
                Simpan nomor ini. Balasan dikirim ke {form.email}. Jika mendesak hari yang sama, telepon {house.phone}.
              </p>
              <button type="button" className="link-quiet mt-8 text-sm" onClick={() => { setRef(null); setForm(empty); }}>
                Tulis permintaan lain
              </button>
            </div>
            <dl className="border-t border-line md:col-span-6 md:col-start-7">
              {[
                ["Nama", form.name],
                ["Tanggal", formatLongDate(form.date)],
                ["Sesi", sitting ? `${sitting.time} · ${sitting.label}` : ""],
                ["Tamu", `${form.guests} orang`],
                ["Ruang", room?.name ?? ""],
                ["Menu", service?.label ?? ""],
                ["Catatan", form.note || form.diet || "—"],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-[8rem_1fr] gap-4 border-b border-line py-4 text-sm">
                  <dt className="label pt-1">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Chapter
        index="IV"
        kicker="Meja"
        title="Minta, jangan pesan lewat aplikasi."
        en="Ask for a table."
        dek="Kami membalas dalam satu hari. Meja tidak dianggap dipegang sebelum Anda menerima surat dari meja@nussanies.id."
      />

      <section>
        <form onSubmit={submit} noValidate className="mx-auto grid max-w-[1440px] md:grid-cols-12">
          <div className="border-b border-line px-5 py-10 md:col-span-7 md:border-b-0 md:border-r md:px-10 md:py-14">
            <fieldset className="grid gap-8">
              <legend className="label">Siapa yang datang</legend>
              <Field label="Nama" error={errors.name}>
                <input
                  className={`field ${errors.name ? "invalid" : ""}`}
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                  autoComplete="name"
                  placeholder="Nama lengkap"
                />
              </Field>
              <div className="grid gap-8 sm:grid-cols-2">
                <Field label="Surat elektronik" error={errors.email}>
                  <input
                    className={`field ${errors.email ? "invalid" : ""}`}
                    type="email"
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    autoComplete="email"
                    placeholder="nama@surat.com"
                  />
                </Field>
                <Field label="Telepon" error={errors.phone}>
                  <input
                    className={`field ${errors.phone ? "invalid" : ""}`}
                    type="tel"
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    autoComplete="tel"
                    placeholder="+62"
                  />
                </Field>
              </div>
            </fieldset>

            <fieldset className="mt-12 grid gap-8">
              <legend className="label">Kapan</legend>
              <div className="grid gap-8 sm:grid-cols-2">
                <Field label="Tanggal" error={errors.date}>
                  <input
                    className={`field ${errors.date ? "invalid" : ""}`}
                    type="date"
                    min="2026-10-29"
                    value={form.date}
                    onChange={(e) => set("date", e.target.value)}
                  />
                </Field>
                <div>
                  <p className="label">Yang berlaku hari itu</p>
                  <p className="mt-3 font-serif text-2xl italic">
                    {service ? service.label : "Pilih tanggal"}
                  </p>
                  {service && !service.closed && (
                    <p className="mt-1 text-sm text-mute">{service.courses} hidangan.</p>
                  )}
                </div>
              </div>

              <Field label="Sesi" error={errors.sitting}>
                <div className="mt-2 grid gap-2 sm:grid-cols-2" role="group">
                  {sittings.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      className="choice"
                      aria-pressed={form.sitting === s.id}
                      disabled={!!service?.closed}
                      onClick={() => set("sitting", s.id)}
                    >
                      <span className="font-serif text-2xl italic">{s.time}</span>
                      <span className="mt-1 block text-sm">{s.label}</span>
                      <span className="mt-1 block text-xs opacity-70">{s.note}</span>
                    </button>
                  ))}
                </div>
              </Field>
            </fieldset>

            <fieldset className="mt-12 grid gap-8">
              <legend className="label">Di mana</legend>
              <Field label={`Tamu · ${form.guests}`}>
                <input
                  type="range"
                  min={1}
                  max={10}
                  value={form.guests}
                  onChange={(e) => {
                    const n = Number(e.target.value);
                    setForm((f) => ({
                      ...f,
                      guests: n,
                      room: roomsFor(n).some((r) => r.id === f.room) ? f.room : "",
                    }));
                  }}
                  className="mt-4 w-full accent-ink"
                  aria-valuemin={1}
                  aria-valuemax={10}
                  aria-valuenow={form.guests}
                />
                <div className="mt-1 flex justify-between text-xs text-mute">
                  <span>1</span>
                  <span>10</span>
                </div>
              </Field>
              <Field label="Ruang" error={errors.room}>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  {rooms.map((r) => {
                    const ok = availableRooms.some((a) => a.id === r.id);
                    return (
                      <button
                        key={r.id}
                        type="button"
                        className="choice"
                        aria-pressed={form.room === r.id}
                        disabled={!ok}
                        onClick={() => set("room", r.id)}
                      >
                        <span className="block">{r.name}</span>
                        <span className="mt-1 block text-xs opacity-70">{ok ? r.seats : "Tidak muat"}</span>
                      </button>
                    );
                  })}
                </div>
              </Field>
            </fieldset>

            <fieldset className="mt-12 grid gap-8">
              <legend className="label">Yang perlu dapur tahu</legend>
              <Field label="Pantangan" error={errors.diet}>
                <input
                  className="field"
                  value={form.diet}
                  onChange={(e) => set("diet", e.target.value)}
                  placeholder="Kerang, gula, tidak minum anggur…"
                />
              </Field>
              <Field label="Catatan" error={errors.note}>
                <textarea
                  className="field"
                  value={form.note}
                  onChange={(e) => set("note", e.target.value)}
                  placeholder="Ulang tahun, kursi dekat pintu, atau tidak sama sekali."
                />
              </Field>
            </fieldset>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <button type="submit" className="btn-ink">
                Kirim permintaan
              </button>
              <p className="max-w-xs text-xs text-mute">
                Dengan mengirim, Anda setuju kami menyimpan nama dan tanggal sampai malam itu selesai.
              </p>
            </div>
          </div>

          <aside className="bg-[#efe8dc] px-5 py-10 md:col-span-5 md:px-10 md:py-14">
            <p className="label">Ringkas</p>
            <p className="mt-4 font-serif text-3xl italic leading-tight">
              {form.name.trim() || "Tamu"}
              {form.date ? `, ${formatLongDate(form.date)}` : ", tanggal belum dipilih"}.
            </p>
            <ul className="mt-8 space-y-4 border-t border-line pt-6 text-sm">
              <li className="flex justify-between gap-4">
                <span className="text-mute">Sesi</span>
                <span>{sitting ? sitting.time : "—"}</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-mute">Tamu</span>
                <span>{form.guests}</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-mute">Ruang</span>
                <span>{room?.name ?? "—"}</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-mute">Menu</span>
                <span>{service && !service.closed ? service.label : "—"}</span>
              </li>
            </ul>
            <figure className="mt-10">
              <img
                src="/images/setting.jpg"
                alt="Satu tata meja: piring keramik, gelas, dan serbet linen"
                className="aspect-square w-full object-cover"
              />
              <figcaption className="mt-3 text-sm text-mute">
                Satu tata letak, sama di semua meja. Tidak ada serbet lipat angsa.
              </figcaption>
            </figure>
            <p className="mt-8 text-sm">
              {house.street}
              <br />
              {house.area}
            </p>
            <a href={house.phoneHref} className="link-quiet mt-3 text-sm">
              {house.phone}
            </a>
          </aside>
        </form>
      </section>
    </>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="label">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-copper">{error}</span>}
    </label>
  );
}
