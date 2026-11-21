import { siteConfig as c } from "@/data/siteConfig";
export default function Contact() {
  const links = [["WhatsApp", c.whatsapp], ["Instagram", c.instagram], ["Email", c.email ? `mailto:${c.email}` : ""], [c.phone, `tel:${c.phone.replace(/\s/g, "")}`], ["Behance", c.behance], ["LinkedIn", c.linkedin]].filter(([, h]) => h);
  return (
    <section id="contact" className="overflow-hidden px-5 pt-32 md:px-10">
      <h2 className="text-[13vw] font-extrabold uppercase leading-[.88] tracking-tighter md:text-[9vw]">Let&apos;s create<br /><span className="outline-text">something that</span><br /><span className="metal">matters.</span></h2>
      <p className="mt-10 max-w-md font-serif text-2xl italic text-silver">Have a project, an idea, or something worth telling? Let&apos;s talk.</p>
      <a href={c.whatsapp || `mailto:${c.email}`} target="_blank" rel="noreferrer" className="relative mt-10 inline-block overflow-hidden border border-silver px-10 py-5 text-xs tracking-[.3em]">
        <span className="relative z-10">START A PROJECT</span>
        <span className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-[#2F6BFF]/50 to-transparent" style={{ animation: "sweep 3.2s ease-in-out infinite" }} />
      </a>
      <ul className="mt-20 flex flex-wrap gap-x-10 gap-y-3 border-t line pt-8">
        {links.map(([l, h]) => (<li key={l}><a href={h} target="_blank" rel="noreferrer" className="group relative text-sm tracking-[.2em]">{l}<span className="absolute -bottom-1 left-0 h-px w-0 bg-silver transition-all duration-500 group-hover:w-full" /></a></li>))}
      </ul>
      <footer className="mt-20 flex flex-col justify-between gap-2 border-t line py-8 text-[11px] tracking-[.2em] text-steel md:flex-row">
        <span>{c.name.toUpperCase()} — {c.role.toUpperCase()}</span><span>© 2026 — ALL RIGHTS RESERVED</span>
      </footer>
    </section>
  );
}
