"use client";
import { MotionConfig } from "framer-motion";
import Nav from "@/components/Nav"; import Hero from "@/components/Hero"; import Work from "@/components/Work";
import Brands from "@/components/Brands"; import About from "@/components/About"; import Contact from "@/components/Contact";
export default function Page() {
  return (<MotionConfig reducedMotion="user"><Nav /><main><Hero /><Work /><Brands /><About /><Contact /></main></MotionConfig>);
}
