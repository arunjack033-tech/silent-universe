import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Silent Universe",
    short_name: "Silent Universe",
    description: "A multi-step love letter experience built with Next.js.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#ef9fa1",
    theme_color: "#ef9fa1",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
