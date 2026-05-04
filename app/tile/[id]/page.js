"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Loader from "@/components/Loader";

export default function TileDetailsPage() {
  const params = useParams();
  const [tile, setTile] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("tilesUser");

    if (!savedUser) {
      window.location.href = "/login";
      return;
    }

    fetch("/tiles.json")
      .then((res) => res.json())
      .then((data) => {
        const foundTile = data.find((item) => item.id === params.id);
        setTile(foundTile);
        setChecking(false);
      });
  }, [params.id]);

  if (checking) {
    return <Loader />;
  }

  if (!tile) {
    return (
      <div className="not-found">
        <h1>Tile Not Found</h1>
        <p>The tile you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <section className="section">
      <div className="container details-wrapper">
        <img className="details-image" src={tile.image} alt={tile.title} />

        <div className="details-content">
          <h1>{tile.title}</h1>
          <p>{tile.styleDescription}</p>

          <p>
            <strong>Creator:</strong> {tile.creator}
          </p>
          <p>
            <strong>Material:</strong> {tile.material}
          </p>
          <p>
            <strong>Dimensions:</strong> {tile.dimensions}
          </p>
          <p>
            <strong>Price:</strong> {tile.currency} {tile.price}
          </p>
          <p>
            <strong>Stock:</strong>{" "}
            {tile.inStock ? "Available" : "Out of Stock"}
          </p>

          <div className="tag-list">
            {tile.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
