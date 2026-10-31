export type Dish = {
  id: string;
  index: string;
  course: string;
  name: string;
  en: string;
  note: string;
  image?: string;
  inShort: boolean;
};

export type RoomId = "depan" | "sudut" | "pelataran" | "panjang";

export type Room = {
  id: RoomId;
  name: string;
  seats: string;
  note: string;
  min: number;
  max: number;
  exact?: number;
};

export const house = {
  name: "Nussanies",
  street: "Jl. Teuku Cik Ditiro No. 18",
  area: "Menteng, Jakarta Pusat",
  phone: "+62 21 390 4418",
  phoneHref: "tel:+62213904418",
  email: "meja@nussanies.id",
  instagram: "@nussanies",
  covers: 18,
  year: 1934,
};

export const dishes: Dish[] = [
  {
    id: "tiram",
    index: "01",
    course: "Pembuka",
    name: "Tiram, gel kelapa, daun jeruk",
    en: "Oyster, coconut gel, kaffir lime",
    note: "Dua tiram dari pantai utara. Gel kelapa dingin, sedikit garam Cirebon, satu daun jeruk yang diremas di atas piring — bukan di dapur.",
    image: "/images/dish-oyster.jpg",
    inShort: true,
  },
  {
    id: "jagung",
    index: "02",
    course: "Pembuka",
    name: "Sup jagung muda & kepiting",
    en: "Young corn, crab",
    note: "Kaldu jernih. Jagung dipetik pagi, kepiting direbus sebentar saja. Disajikan hangat, tidak kental.",
    inShort: false,
  },
  {
    id: "cumi",
    index: "03",
    course: "Laut",
    name: "Cumi bakar, sambal hijau dingin",
    en: "Grilled squid, cold green sambal",
    note: "Sambal dihaluskan dan didinginkan, supaya pedasnya tenang. Cumi dari dapur, bukan dari freezer.",
    inShort: false,
  },
  {
    id: "kakap",
    index: "04",
    course: "Laut",
    name: "Kakap, daun singkong, kerang",
    en: "Snapper, cassava leaf, clams",
    note: "Kakap Pelabuhan Ratu, kulitnya digaringkan. Saus daun singkong dari kebun di Bogor, dua kerang di samping — bukan hiasan.",
    image: "/images/dish-fish.jpg",
    inShort: true,
  },
  {
    id: "iga",
    index: "05",
    course: "Dapur",
    name: "Iga sapi, kecap hitam, ubi ungu",
    en: "Beef rib, black soy, purple yam",
    note: "Dimasak lama, sampai tulangnya mau lepas. Kecap tidak manis berlebihan. Ubi ungu dipanggang, bukan dikukus sampai hancur.",
    image: "/images/dish-beef.jpg",
    inShort: true,
  },
  {
    id: "keju",
    index: "06",
    course: "Jeda",
    name: "Keju lokal & madu randu",
    en: "Local cheese, randu honey",
    note: "Sepotong kecil. Bisa dilewati — beri tahu kami, kami tidak menggantinya dengan hidangan lain.",
    inShort: false,
  },
  {
    id: "aren",
    index: "07",
    course: "Penutup",
    name: "Gula aren, jeruk Bali, sagu",
    en: "Palm sugar, pomelo, sago",
    note: "Custard gula aren Banten, krim kelapa yang dibakar sebentar, jeruk Bali, dan sagu mutiara. Manisnya pendek.",
    image: "/images/dish-dessert.jpg",
    inShort: true,
  },
];

export const wines = [
  {
    name: "Pet-nat jeruk bali",
    place: "Bandung",
    note: "Sedikit kabur, asam, baik untuk tiram.",
    glass: "145",
    bottle: "780",
  },
  {
    name: "Chenin, Swartland",
    place: "Afrika Selatan",
    note: "Kering, kulit apel, tidak oak.",
    glass: "165",
    bottle: "890",
  },
  {
    name: "Assyrtiko",
    place: "Santorini",
    note: "Garam dan batu. Untuk kakap.",
    glass: "190",
    bottle: "980",
  },
  {
    name: "Pinot noir, Sta. Rita Hills",
    place: "California",
    note: "Tipis, buah merah masam. Untuk iga.",
    glass: "210",
    bottle: "1.150",
  },
  {
    name: "Gamay, Beaujolais",
    place: "Prancis",
    note: "Dingin. Bisa diminum sepanjang malam.",
    glass: "155",
    bottle: "820",
  },
  {
    name: "Cidre brut",
    place: "Normandia",
    note: "Bukan anggur. Baik jika Anda tidak minum anggur.",
    glass: "120",
    bottle: "640",
  },
];

export const rooms: Room[] = [
  {
    id: "depan",
    name: "Ruang depan",
    seats: "1–4 tamu",
    note: "Enam meja linen. Satu di antaranya untuk empat orang — sering sudah dipegang.",
    min: 1,
    max: 4,
  },
  {
    id: "sudut",
    name: "Sudut buku",
    seats: "2 tamu",
    note: "Di samping rak. Jendela jati, satu lampu. Tidak untuk lebih dari dua.",
    min: 2,
    max: 2,
    exact: 2,
  },
  {
    id: "pelataran",
    name: "Pelataran",
    seats: "2 tamu",
    note: "Dua meja di bawah kamboja. Hanya jika malam tidak hujan. Kami memindahkan Anda ke dalam bila perlu.",
    min: 2,
    max: 2,
    exact: 2,
  },
  {
    id: "panjang",
    name: "Ruang panjang",
    seats: "6–10 tamu",
    note: "Satu meja, satu pintu yang bisa ditutup. Minimum enam. Tidak dijual per kursi.",
    min: 6,
    max: 10,
  },
];

export const sittings = [
  { id: "first", time: "18.00", label: "Sesi pertama", note: "Selesai kira-kira pukul 20.15." },
  { id: "second", time: "20.30", label: "Sesi kedua", note: "Pintu ditutup pukul 23.30." },
];

export const prices = {
  short: "890.000",
  long: "1.450.000",
  pairShort: "480.000",
  pairLong: "780.000",
  soft: "320.000",
};

export const menuWindow = "27 Oktober – 8 November 2026";

export function serviceFor(date: Date) {
  const day = date.getDay();
  const closed = day === 0 || day === 1;
  const shortMenu = day === 2 || day === 3;
  return {
    closed,
    shortMenu,
    courses: closed ? 0 : shortMenu ? 4 : 7,
    label: closed ? "Dapur tutup" : shortMenu ? "Menu empat hidangan" : "Menu tujuh hidangan",
  };
}

export function formatLongDate(iso: string) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function roomsFor(guests: number) {
  return rooms.filter((room) => {
    if (room.exact) return guests === room.exact;
    return guests >= room.min && guests <= room.max;
  });
}

export const dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
