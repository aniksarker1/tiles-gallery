import TileCard from "./TileCard";

export default function FeaturedTile({ tiles }) {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Featured Tiles</h2>
        <p className="section-subtitle">
          Explore our top selected tile designs for stylish interiors.
        </p>

        <div className="grid">
          {tiles.slice(0, 4).map((tile) => (
            <TileCard key={tile.id} tile={tile} />
          ))}
        </div>
      </div>
    </section>
  );
}