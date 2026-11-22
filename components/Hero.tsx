
"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
const ease = [0.22, 1, 0.36, 1] as const;
const rise = (i: number) => ({ initial: { y: "110%" }, animate: { y: 0 }, transition: { duration: 1.1, delay: 0.2 + i * 0.12, ease } });
export default function Hero() {
  const mx = useMotionValue(0), my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 20 }), sy = useSpring(my, { stiffness: 50, damping: 20 });
  const px = useTransform(sx, [-1, 1], [-18, 18]), py = useTransform(sy, [-1, 1], [-10, 10]);
  const tx = useTransform(sx, [-1, 1], [12, -12]);
  const [time, setTime] = useState("");
  useEffect(() => {
    const t = () => setTime(new Date().toLocaleTimeString("en-GB", { timeZone: siteConfig.timeZone, hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    t(); const id = setInterval(t, 1000); return () => clearInterval(id);
  }, []);
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-5 pb-10 md:px-10"
      onMouseMove={(e) => { mx.set((e.clientX / innerWidth) * 2 - 1); my.set((e.clientY / innerHeight) * 2 - 1); }}>
      <motion.div style={{ x: tx }} aria-hidden className="absolute inset-0">
        <svg className="h-full w-full" viewBox="0 0 1440 900" preserveAspectRatio="none">
          {Array.from({ length: 16 }).map((_, i) => (
            <path key={i} d={`M-50 ${300 + i * 26} C 300 ${180 + i * 26}, 520 ${520 + i * 26}, 820 ${340 + i * 26} S 1300 ${200 + i * 26}, 1500 ${360 + i * 26}`} fill="none" stroke="#C0C0C0" strokeOpacity={0.14 + (i % 4) * 0.05} strokeWidth="1" vectorEffect="non-scaling-stroke" style={{ animation: `fade 2.2s ${0.3 + i * 0.06}s both` }} />
          ))}
        </svg>
      </motion.div>
      {/* Portrait cutout (background removed) */}
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.6, delay: 0.2, ease }}
        className="absolute bottom-0 right-[-10%] h-[78svh] md:right-[8%] md:h-[96svh] [mask-image:linear-gradient(to_bottom,#000_72%,transparent)]">
        <motion.div style={{ x: px, y: py }} className="h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/ali-cutout.png" alt="Portrait of Ali Mohamed Ghaneim" fetchPriority="high" className="h-full w-auto max-w-none contrast-110" />
        </motion.div>
      </motion.div>
      <div className="absolute left-0 top-24 hidden w-full justify-between px-10 text-[11px] tracking-[.25em] text-steel md:flex">
        <span>{siteConfig.location} · {time}</span><span className="flex items-center gap-2"><i className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#2F6BFF]" />AVAILABLE FOR PROJECTS</span>
      </div>
      <motion.h1 style={{ x: tx }} className="relative z-10 text-[15vw] font-extrabold uppercase leading-[.86] tracking-tighter md:text-[9.5vw]">
        {["I turn ideas", "into visual", "experiences."].map((l, i) => (
          <span key={l} className="block overflow-hidden pb-[.06em]"><motion.span {...rise(i)} className={`block ${i === 1 ? "outline-text" : i === 2 ? "metal" : ""}`}>{l}</motion.span></span>
        ))}
      </motion.h1>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3, duration: 1 }} className="relative z-10 mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-md"><p className="font-serif text-2xl italic text-silver">Video Editor, Photographer, Creative Producer</p>
          <p className="mt-3 text-sm leading-relaxed text-steel">{siteConfig.bio}</p></div>
        <a href="#work" className="group inline-flex items-center gap-3 text-xs tracking-[.3em]">EXPLORE MY WORK <span className="inline-block transition-transform duration-500 group-hover:translate-y-1">↓</span></a>
      </motion.div>
      <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.8, delay: .6, ease }} className="absolute bottom-0 left-0 h-px w-full origin-left bg-gradient-to-r from-transparent via-silver to-transparent" />
    </section>
  );
}
