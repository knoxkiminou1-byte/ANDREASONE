export type WorldBuildingCategory = {
  tag: string;
  title: string;
  description: string;
  bg: string;
  color: string;
  sub: string;
};

export const worldBuildingIntro =
  "Exploring the intersection of sound, visual identity, immersive experience, and cultural atmosphere through creative direction, storytelling, and collaborative worldbuilding.";

export const worldBuildingCategories: WorldBuildingCategory[] = [
  {
    tag: "VISUAL IDENTITY",
    title: "VISUAL IDENTITY",
    description: "Posters, typography, branding systems, graphics, projection visuals.",
    bg: "#111111",
    color: "#f6c45a",
    sub: "#efe7d7",
  },
  {
    tag: "IMMERSIVE ENVIRONMENTS",
    title: "IMMERSIVE ENVIRONMENTS",
    description: "Festival activations, nightlife experiences, stage atmosphere, spatial storytelling.",
    bg: "#cf5d27",
    color: "#111111",
    sub: "#111111",
  },
  {
    tag: "FASHION & OBJECTS",
    title: "FASHION & OBJECTS",
    description: "Merch, styling, wearable identity, collectible design.",
    bg: "#445829",
    color: "#f6c45a",
    sub: "#d9decf",
  },
  {
    tag: "CREATIVE COLLABORATION",
    title: "CREATIVE COLLABORATION",
    description: "Cross-disciplinary projects bridging music, visual culture, and community.",
    bg: "#f6c45a",
    color: "#111111",
    sub: "#111111",
  },
];
