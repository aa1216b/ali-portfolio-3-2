// Edit, add or remove projects here. Titles/clients are left generic on purpose: the links carry no titles,
// so fill in title, client, category and description for each. thumbnail is optional: for the sharpest cards, export a 1080x1920 JPG frame from each video into /public/thumbs and set thumbnail: "/thumbs/name.jpg".
export type Project = {
  id: string; title: string; client: string; category: string; year: string;
  thumbnail?: string; videoUrl: string; description?: string; aspectRatio: "16/9" | "9/16" | "1/1" | "4/5"; featured?: boolean;
};
const short = (id: string) => `https://youtube.com/shorts/${id}`;
export const projects: Project[] = [
{ id: "p1", title: "اسم المشروع", client: "اسم العميل", category: "Short film", year: "2026", videoUrl: "https://youtube.com/shorts/D-IStn8V2u0?si=VGd26ssU-kNugLZo
", aspectRatio: "9/16" },

  { id: "p2", title: "Project 02", client: "Ghazl El Mahalla FC", category: "Short film", year: "2026", videoUrl: short("aAPRZIFqkrg"), aspectRatio: "9/16" },
  { id: "p3", title: "Project 03", client: "Fathy Fattouh", category: "Short film", year: "2026", videoUrl: short("x5bxpZ2W8DU"), aspectRatio: "9/16" },
  { id: "p4", title: "Project 04", client: "nerd's", category: "Short film", year: "2026", videoUrl: short("9GeANFlrAYo"), aspectRatio: "9/16" },
  { id: "p5", title: "Project 05", client: "-", category: "Short film", year: "2026", videoUrl: short("pt_3TeLioGI"), aspectRatio: "9/16" },
];
