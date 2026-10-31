type Props = {
  index: string;
  kicker: string;
  title: string;
  en: string;
  dek?: string;
};

export default function Chapter({ index, kicker, title, en, dek }: Props) {
  return (
    <header className="border-b border-line">
      <div className="mx-auto grid max-w-[1440px] gap-8 px-5 pb-12 pt-28 md:grid-cols-12 md:px-10 md:pb-16 md:pt-32">
        <div className="md:col-span-3">
          <p className="label">{kicker}</p>
          <p className="mt-6 font-serif text-5xl italic text-mute/80">{index}</p>
        </div>
        <div className="md:col-span-8 md:col-start-5">
          <h1 className="display text-[clamp(2.8rem,6vw,5.4rem)]">{title}</h1>
          <p className="mt-4 font-serif text-lg italic text-mute md:text-xl">{en}</p>
          {dek && <p className="mt-6 max-w-xl text-[1.05rem] text-ink/90">{dek}</p>}
        </div>
      </div>
    </header>
  );
}
