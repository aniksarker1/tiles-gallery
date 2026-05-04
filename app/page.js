import Banner from "@/components/Banner";
import Marquee from "@/components/Marquee";
import FeaturedTile from "@/components/FeaturedTiles";
import fs from "fs/promises";
import path from "path";

async function getTiles() {
  const filePath = path.join(process.cwd(), "public", "tiles.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

export default async function HomePage() {
  const tiles = await getTiles();

  return (
    <>
      <Banner />
      <Marquee />
      <FeaturedTile tiles={tiles} />
    </>
  );
}