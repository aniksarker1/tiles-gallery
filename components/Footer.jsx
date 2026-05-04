import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>
          <h3>Tiles Gallery</h3>
          <p>
            Discover premium tile designs for modern homes, creative interiors,
            studios, restaurants, and stylish commercial spaces.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <Link href="/">Home</Link>
          <Link href="/all-tiles">All Tiles</Link>
          <Link href="/my-profile">My Profile</Link>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>Email: support@tilesgallery.com</p>
          <p>Facebook | Instagram | LinkedIn</p>
        </div>
      </div>
    </footer>
  );
}
