"use client";
import { useState } from "react";
const skills: [string, string][] = [
  ["Video Editing", "Rhythm, pacing and sound that hold attention."], ["Cinematography", "Light, framing and movement with intent."],
  ["Photography", "Single frames that carry a whole story."], ["Creative Content Production", "From idea to delivered content."],
  ["Visual Storytelling", "Story first, then the visual language."], ["Social Media Content", "Built to stop the scroll on any phone."],
];
export default function About() {
  const [a, setA] = useState(0);
  return (
    <section id="about" className="px-5 py-32 md:px-10">
      <div className="grid gap-16 md:grid-cols-12">
        <h2 className="text-5xl font-extrabold uppercase leading-[.92] tracking-tighter md:col-span-7 md:text-8xl">Behind every frame, there&apos;s a <span className="metal">point of view.</span></h2>
        <div className="space-y-5 font-serif text-xl leading-relaxed text-silver md:col-span-5 md:pt-6">
          <p>I&apos;m Ali Mohamed Ghaneim, a visual storyteller working across video editing, photography, and content creation.</p>
          <p>I believe visuals are more than images. They are a way to communicate ideas, create emotion, and make brands memorable.</p>
          <p>My work focuses on understanding the story first, then finding the visual language that makes it worth watching.</p>
        </div>
      </div>
      <ul className="mt-24 border-t line">
        {skills.map(([s, d], i) => (
          <li key={s} className="border-b line">
            <button onClick={() => setA(i)} onMouseEnter={() => setA(i)} onFocus={() => setA(i)} aria-expanded={a === i} className="flex w-full flex-col items-start justify-between gap-2 py-6 text-left md:flex-row md:items-center">
              <span className={`text-3xl font-extrabold uppercase tracking-tight transition-all duration-500 md:text-6xl ${a === i ? "metal md:translate-x-6" : "text-steel/50"}`}>{s}</span>
              <span className={`font-serif text-lg italic text-silver transition-opacity duration-500 ${a === i ? "opacity-100" : "hidden opacity-0 md:block"}`}>{d}</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
