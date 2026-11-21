"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import VideoModal from "./VideoModal";
const span = (p: Project, i: number) => (i === 3 ? "md:col-start-3 " : "") + (p.featured ? "md:col-span-12" : p.aspectRatio === "9/16" ? "md:col-span-4" : p.aspectRatio === "16/9" ? (i % 2 ? "md:col-span-8" : "md:col-span-7") : "md:col-span-5");
const offset = (i: number) => (i % 3 === 1 ? "md:mt-24" : "");
// Tries your own thumbnail first, then YouTube's highest resolutions, so cards stay sharp.
function Thumb({ p }: { p: Project }) {
  const yt = p.videoUrl.match(/(?:youtu\.be\/|v=|shorts\/)([\w-]{11})/)?.[1];
  const list = [p.thumbnail, yt && `https://i.ytimg.com/vi/${yt}/maxresdefault.jpg`, yt && `https://i.ytimg.com/vi/${yt}/sddefault.jpg`, yt && `https://i.ytimg.com/vi/${yt}/hqdefault.jpg`].filter(Boolean) as string[];
  const [i, setI] = useState(0);
  if (i >= list.length) return <div className="h-full w-full bg-gradient-to-br from-panel to-ink" />;
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={list[i]} alt="" loading="lazy" decoding="async" onError={() => setI(i + 1)} onLoad={(e) => { if (e.currentTarget.naturalWidth < 200) setI(i + 1); }} className="h-full w-full scale-[1.02] object-cover transition duration-700 group-hover:scale-[1.06]" />;
}
export default function Work() {
  const [active, setActive] = useState<Project | null>(null);
  return (
    <section id="work" className="px-5 py-32 md:px-10">
      <div className="mb-16 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <h2 className="text-6xl font-extrabold uppercase leading-[.9] tracking-tighter md:text-9xl">Selected<br /><span className="metal">work</span></h2>
        <p className="max-w-xs font-serif text-xl italic text-steel">A selection of projects, stories, and visual experiments.</p>
      </div>
      <div className="grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-12">
        {projects.map((p, i) => (
          <motion.article key={p.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .9, ease: [0.22, 1, 0.36, 1] }} className={`${span(p, i)} ${offset(i)}`}>
            <button onClick={() => setActive(p)} className="group block w-full text-left" aria-label={`Play ${p.title}`}>
              <div className="relative overflow-hidden bg-ink" style={{ aspectRatio: p.aspectRatio }}>
                <Thumb p={p} />
                <span className="absolute inset-0 flex items-center justify-center"><span className="flex h-16 w-16 items-center justify-center rounded-full border border-silver/60 backdrop-blur-sm transition group-hover:scale-110 group-hover:bg-paper group-hover:text-ink"><Play size={20} /></span></span>
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <h3 className={`font-extrabold uppercase tracking-tight ${p.featured ? "text-4xl md:text-6xl" : "text-xl md:text-2xl"}`}>{p.title}</h3>
                <span className="shrink-0 text-xs text-steel">{p.year}</span>
              </div>
              <p className="mt-1 text-xs text-steel">{p.client} · {p.category}</p>
              {p.description && <p className="mt-2 max-w-md font-serif text-lg italic text-silver">{p.description}</p>}
            </button>
          </motion.article>
        ))}
      </div>
      <AnimatePresence>{active && <VideoModal project={active} onClose={() => setActive(null)} />}</AnimatePresence>
    </section>
  );
}
