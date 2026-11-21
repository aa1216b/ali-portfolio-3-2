import type { Metadata } from "next";
import { Archivo, Instrument_Serif } from "next/font/google";
import "./globals.css";
const display = Archivo({ subsets: ["latin"], weight: ["400", "800"], variable: "--f-display" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--f-serif" });
export const metadata: Metadata = { title: "Ali Mohamed Ghaneim — Visual Storyteller", description: "Video editor, photographer and creative producer.", viewport: "width=device-width, initial-scale=1" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className={`${display.variable} ${serif.variable} font-display grain`}>{children}</body></html>);
}
