
"use client";

import { useEffect, useState } from "react";
import TileCard from "@/components/TileCard";
import Loader from "@/components/Loader";

export default function AllTilesPage() {
  const [tiles, setTiles] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/tiles.json")
      .then((res) => res.json())
      .then((data) => {
        setTiles(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const filteredTiles = tiles.filter((tile) =>
    tile.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">All Tiles Gallery</h1>
        <p className="section-subtitle">
          Search and explore beautiful tile collections.
        </p>

        <input
          className="search-box"
          type="text"
          placeholder="Search tiles by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="grid">
          {filteredTiles.map((tile) => (
            <TileCard key={tile.id} tile={tile} />
          ))}
        </div>
      </div>
    </section>
  );
}
