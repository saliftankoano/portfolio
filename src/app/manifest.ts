import { DATA } from "@/data/resume";
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${DATA.name} - Software Engineer Portfolio`,
    short_name: DATA.name,
    description: DATA.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/black-bxp.png",
        sizes: "any",
        type: "image/png",
      },
      {
        src: "/black-bxp.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/black-bxp.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
} 