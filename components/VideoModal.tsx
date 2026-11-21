"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import type { Project } from "@/data/projects";
export function embedUrl(u: string): { kind: "iframe" | "video"; src: string } {
  const yt = u.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
  if (yt) return { kind: "iframe", src: `https://www.youtube.com/embed/${yt[1]}?autoplay=1&rel=0` };
  const vm = u.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vm) return { kind: "iframe", src: `https://player.vimeo.com/video/${vm[1]}?autoplay=1` };
  if (/\.(mp4|webm|mov|m4v)(\?|$)/i.test(u)) return { kind: "video", src: u };
  return { kind: "iframe", src: u };
}
export default function VideoModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    const prev = document.body.style.overflow; document.body.style.overflow = "hidden";
    addEventListener("keydown", k); return () => { removeEventListener("keydown", k); document.body.style.overflow = prev; };
  }, [onClose]);
  const v = embedUrl(project.videoUrl);
  const tall = project.aspectRatio === "9/16";
  return (
    <motion.div role="dialog" aria-modal="true" aria-label={project.title} className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 p-4"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <button aria-label="Close video" onClick={onClose} className="absolute right-5 top-5 z-10 border line border p-2"><X size={20} /></button>
      <motion.div initial={{ clipPath: "inset(50% 0 50% 0)" }} animate={{ clipPath: "inset(0% 0 0% 0)" }} transition={{ duration: .8, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()} className={`w-full ${tall ? "max-h-[85svh] max-w-[calc(85svh*9/16)]" : "max-w-5xl"}`} style={{ aspectRatio: project.aspectRatio === "9/16" ? "9/16" : "16/9" }}>
        {v.kind === "video" ? <video src={v.src} controls autoPlay playsInline className="h-full w-full bg-black" />
          : <iframe src={v.src} title={project.title} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen className="h-full w-full bg-black" />}
      </motion.div>
      <p className="absolute bottom-5 left-5 text-xs tracking-[.25em] text-steel">{project.client} — {project.title}</p>
    </motion.div>
  );
}
