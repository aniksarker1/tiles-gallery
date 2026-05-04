"use client";

import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please enter your email and password");
      return;
    }

    const demoUser = {
      name: "Demo User",
      email: email,
      image: "https://i.ibb.co.com/4pDNDk1/avatar.png",
    };

    localStorage.setItem("tilesUser", JSON.stringify(demoUser));
    toast.success("Login successful");
    window.location.href = "/";
  };

  const handleGoogleLogin = () => {
    const demoUser = {
      name: "Google User",
      email: "googleuser@gmail.com",
      image: "https://i.ibb.co.com/4pDNDk1/avatar.png",
    };

    localStorage.setItem("tilesUser", JSON.stringify(demoUser));
    toast.success("Google login successful");
    window.location.href = "/";
  };

  return (
    <section className="form-page">
      <div className="auth-card">
        <h1>User Login</h1>
        <p className="auth-subtitle">
          Login to continue exploring tile details and your profile.
        </p>

        <form onSubmit={handleLogin}>
          <div className="form-control">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-control">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="btn full-btn" type="submit">
            Login
          </button>
        </form>

        <button onClick={handleGoogleLogin} className="btn google-btn full-btn">
          Login with Google
        </button>

        <p className="auth-link">
          Don&apos;t have an account? <Link href="/register">Register</Link>
        </p>
      </div>
    </section>
  );
}
