"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("tilesUser");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("tilesUser");
    setUser(null);
    toast.success("Logged out successfully");
    window.location.href = "/";
  };

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link href="/" className="logo">
          Tiles Gallery
        </Link>

        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/all-tiles">All Tiles</Link>
          <Link href="/my-profile">My Profile</Link>
        </div>

        <div className="nav-actions">
          {user ? (
            <>
              <Link href="/my-profile" className="profile-mini">
                <img src={user.image} alt={user.name} />
                <span>{user.name}</span>
              </Link>

              <button onClick={handleLogout} className="btn">
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
