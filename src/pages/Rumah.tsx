import { Link } from "react-router-dom";
import Chapter from "../components/Chapter";
import { house } from "../data";
import { useTitle } from "../useTitle";

export default function Rumah() {
  useTitle("Rumah — Nussanies");

  return (
    <>
      <Chapter
        index="I"
        kicker="Rumah"
        title="Sebuah rumah, bukan sebuah merek."
        en="A house, not a brand."
        dek="Nussanies menempati rumah tinggal tahun 1934 di Jalan Teuku Cik Ditiro. Kami tidak merobohkan lantainya, tidak memasang lampu gantung, dan tidak menulis nama di pintu."
      />

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-[1440px] md:grid-cols-12">
          <figure className="md:col-span-7">
            <img
              src="/images/facade.jpg"
              alt="Fasad rumah Nussanies di Menteng, dinding krem, jendela jati, dan pohon kamboja"
              className="h-full max-h-[760px] w-full object-cover"
            />
          </figure>
          <div className="flex flex-col justify-end px-5 py-10 md:col-span-5 md:px-12 md:py-16">
            <p className="label">Dari jalan</p>
            <p className="mt-4 text-[1.05rem]">
              Pintu kayu di sebelah kiri, satu anak tangga, pot tanah liat yang sudah retak. Jika Anda mencari kanopi dan valet, Anda salah rumah — dan itu memang disengaja.
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-y-6 border-t border-line pt-6 text-sm">
              <div>
                <dt className="label">Dibangun</dt>
                <dd className="mt-2">{house.year}</dd>
              </div>
              <div>
                <dt className="label">Dibuka kembali</dt>
                <dd className="mt-2">2022</dd>
              </div>
              <div>
                <dt className="label">Luas ruang makan</dt>
                <dd className="mt-2">86 m²</dd>
              </div>
              <div>
                <dt className="label">Pelataran</dt>
                <dd className="mt-2">2 meja</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 md:grid-cols-12 md:px-10 md:py-24">
          <div className="md:col-span-4">
            <p className="label">Catatan dari dapur</p>
            <h2 className="display mt-4 text-5xl">Laras memasak untuk jumlah yang bisa ia lihat.</h2>
          </div>
          <div className="space-y-5 text-[1.05rem] md:col-span-6 md:col-start-6">
            <p>
              Sebelum Nussanies, Laras Widjaja memasak di kapal pesiar dan di sebuah dapur hotel yang ia tinggalkan karena piringnya terlalu banyak. Ia ingin tahu nama orang yang makan, atau setidaknya tahu bahwa mereka duduk di ruang yang sama.
            </p>
            <p>
              Menu ditulis ulang setiap dua minggu. Tidak ada hidangan andalan yang bertahan setahun. Yang bertahan adalah cara: sedikit, jernih, dan tidak malu pada bahan Indonesia.
            </p>
            <p className="text-mute">
              “Saya tidak menerjemahkan rendang menjadi fine dining. Saya memasak apa yang saya masak di rumah, lalu saya perhatikan lebih lama.”
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-[1440px] items-end gap-6 px-5 pb-16 md:grid-cols-12 md:px-10 md:pb-24">
          <figure className="md:col-span-4 md:col-start-2">
            <img
              src="/images/chef.jpg"
              alt="Laras Widjaja, koki Nussanies, berdiri di dekat meja kayu dapur"
              className="aspect-[3/4] w-full object-cover"
            />
            <figcaption className="mt-3 text-sm text-mute">Laras Widjaja, koki. Menteng, 2026.</figcaption>
          </figure>
          <figure className="md:col-span-5 md:col-start-7">
            <img
              src="/images/hands.jpg"
              alt="Tangan sedang menuang saus hijau ke piring keramik"
              className="aspect-[3/2] w-full object-cover"
            />
            <figcaption className="mt-3 text-sm text-mute">Saus daun singkong, dituang di pass — bukan di meja.</figcaption>
          </figure>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-[1440px] md:grid-cols-12">
          <div className="order-2 px-5 py-14 md:order-1 md:col-span-5 md:px-10 md:py-20">
            <p className="label">Minuman</p>
            <h2 className="display mt-4 text-5xl">Daftar pendek, dipilih Arka.</h2>
            <p className="mt-6 max-w-md">
              Arka Mahendra menjaga kurang dari empat puluh botol. Ia lebih suka menjelaskan satu gelas daripada menyerahkan buku. Ada pasangan anggur untuk menu, dan pasangan tanpa anggur — teh, jeruk, dan air kelapa yang difermentasi ringan.
            </p>
            <Link to="/menu#minuman" className="link-quiet mt-6 text-sm">
              Enam gelas yang selalu ada
            </Link>
          </div>
          <figure className="order-1 md:order-2 md:col-span-7">
            <img
              src="/images/sommelier.jpg"
              alt="Arka Mahendra berdiri di rak anggur Nussanies"
              className="h-full max-h-[680px] w-full object-cover object-top"
            />
          </figure>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 md:grid-cols-12 md:px-10 md:py-24">
          <div className="md:col-span-4">
            <p className="label">Yang tidak kami lakukan</p>
            <h2 className="display mt-4 text-5xl">Agar rumah tetap rumah.</h2>
          </div>
          <ul className="md:col-span-7 md:col-start-6">
            {[
              ["Tidak ada musik latar", "Percakapan dan piring sudah cukup. Jika hujan, Anda akan mendengarnya."],
              ["Tidak ada foto di meja", "Silakan foto dari tempat Anda berdiri, sebelum duduk. Lampu kilat tidak kami izinkan."],
              ["Tidak ada menu anak", "Anak di atas dua belas tahun dipersilakan, dengan menu yang sama. Kursi tinggi tidak tersedia."],
              ["Tidak ada ruang tunggu", "Datang di jam sesi. Jika Anda lebih awal sepuluh menit, tunggulah di pelataran atau di trotoar yang teduh."],
            ].map(([title, note], i) => (
              <li key={title} className="grid gap-2 border-t border-line py-6 sm:grid-cols-[2.5rem_1fr] sm:gap-6">
                <span className="font-serif italic text-mute">0{i + 1}</span>
                <div>
                  <p>{title}</p>
                  <p className="mt-1 text-sm text-mute">{note}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
