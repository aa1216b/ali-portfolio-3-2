// Logos live in /public/logos (silver PNGs). To add a brand: drop a file there and add a line. Order = order in the strip.
export type Brand = { id: string; name: string; logo: string; website?: string; projectUrl?: string };
export const brands: Brand[] = [
  { id: "qloub-masr", name: "Qloub Masr", logo: "/logos/qloub-masr.png" },
  { id: "gamed", name: "Gamed", logo: "/logos/gamed.png" },
  { id: "beit-el-asmak", name: "Beit El Asmak", logo: "/logos/beit-el-asmak.png" },
  { id: "ghazl-el-mahalla", name: "Ghazl El Mahalla FC", logo: "/logos/ghazl-el-mahalla.png" },
  { id: "al-buhayri", name: "Al-Buhayri", logo: "/logos/al-buhayri.png" },
  { id: "bosphorus", name: "Bosphorus", logo: "/logos/bosphorus.png" },
  { id: "peakfit", name: "PeakFit", logo: "/logos/peakfit.png" },
  { id: "al-hadad", name: "AlHadad", logo: "/logos/al-hadad.png" },
  { id: "trefl", name: "Tréfl", logo: "/logos/trefl.png" },
];
