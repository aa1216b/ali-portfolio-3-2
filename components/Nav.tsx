"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
const links = [["WORK", "#work"], ["BRANDS", "#brands"], ["ABOUT", "#about"], ["CONTACT", "#contact"]];
export default function Nav() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const w = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
      <motion.div style={{ scaleX: w }} className="absolute left-0 top-0 h-px w-full origin-left bg-silver" />
      <nav className="flex items-center justify-between px-5 py-5 md:px-10">
        <a href="#top" className="text-sm font-extrabold tracking-[.2em]">{siteConfig.shortName}</a>
        <ul className="hidden gap-10 md:flex">
          {links.map(([l, h]) => (<li key={h}><a href={h} className="group relative text-xs tracking-[.25em]">{l}<span className="absolute -bottom-1 left-0 h-px w-0 bg-silver transition-all duration-500 group-hover:w-full" /></a></li>))}
        </ul>
        <button aria-label={open ? "Close menu" : "Open menu"} className="md:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </nav>
      {open && (
        <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 -z-10 flex flex-col justify-center gap-6 bg-ink px-6 md:hidden">
          {links.map(([l, h]) => (<li key={h}><a href={h} onClick={() => setOpen(false)} className="text-6xl font-extrabold">{l}</a></li>))}
        </motion.ul>
      )}
    </header>
  );
}
