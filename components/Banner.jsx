import Link from "next/link";

export default function Banner() {
  return (
    <section className="hero">
      <div className="container">
        <h1>Discover Your Perfect Aesthetic</h1>
        <p>
          Explore premium tile designs for modern homes, creative spaces,
          studios, restaurants, and elegant interiors.
        </p>
        <Link href="/all-tiles" className="btn">
          Browse Now
        </Link>
      </div>
    </section>
  );
}