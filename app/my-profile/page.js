"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

export default function MyProfilePage() {
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("tilesUser");

    if (!savedUser) {
      window.location.href = "/login";
      return;
    }

    setUser(JSON.parse(savedUser));
    setChecking(false);
  }, []);

  if (checking) {
    return <Loader />;
  }

  return (
    <section>
      <div className="profile-card">
        <img src={user.image} alt={user.name} />
        <h1>{user.name}</h1>
        <p>{user.email}</p>

        <br />

        <Link href="/update-profile" className="btn">
          Update Profile
        </Link>
      </div>
    </section>
  );
}
