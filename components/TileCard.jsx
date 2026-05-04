import Link from "next/link";

export default function TileCard({ tile }) {
  return (
    <div className="tile-card">
      <img src={tile.image} alt={tile.title} />

      <div className="tile-card-body">
        <h3>{tile.title}</h3>
        <p>{tile.description}</p>

        <Link href={`/tile/${tile.id}`} className="btn btn-dark">
          View Details
        </Link>
      </div>
    </div>
  );
}