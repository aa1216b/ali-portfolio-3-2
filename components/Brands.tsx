import { brands } from "@/data/brands";
export default function Brands() {
  const Logo = ({ b, hidden }: { b: (typeof brands)[number]; hidden?: boolean }) => {
    // eslint-disable-next-line @next/next/no-img-element
    const img = <img src={b.logo} alt={hidden ? "" : b.name} loading="lazy" draggable={false} className="h-12 w-auto max-w-none opacity-50 transition duration-500 hover:opacity-100 md:h-16" />;
    const href = b.projectUrl || b.website;
    return <li className="shrink-0 px-8 md:px-14" aria-hidden={hidden}>{href ? <a href={href} target="_blank" rel="noreferrer" tabIndex={hidden ? -1 : 0}>{img}</a> : img}</li>;
  };
  const set = [...brands, ...brands]; // each half of the track is wide enough to fill large screens
  return (
    <section id="brands" className="bg-ink py-32">
      <div className="px-5 md:px-10">
        <h2 className="text-5xl font-extrabold uppercase leading-[.92] tracking-tighter md:text-8xl">Brands I&apos;ve<br /><span className="metal">worked with</span></h2>
        <p className="mt-6 max-w-sm font-serif text-xl italic text-steel">Creating visual experiences for brands, businesses, and people.</p>
      </div>
      <div className="group mt-20 overflow-hidden motion-reduce:overflow-x-auto [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <ul className="flex w-max items-center group-hover:[animation-play-state:paused]" style={{ animation: "tick 70s linear infinite" }}>
          {set.map((b, i) => <Logo key={`a${i}`} b={b} />)}
          {set.map((b, i) => <Logo key={`b${i}`} b={b} hidden />)}
        </ul>
      </div>
    </section>
  );
}
