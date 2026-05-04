"use client";

import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    image: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.image ||
      !formData.password
    ) {
      toast.error("Please fill all registration fields");
      return;
    }

    toast.success("Registration successful. Please login.");
    window.location.href = "/login";
  };

  const handleGoogleLogin = () => {
    const demoUser = {
      name: "Google User",
      email: "googleuser@gmail.com",
      image: "https://i.ibb.co.com/4pDNDk1/avatar.png",
    };

    localStorage.setItem("tilesUser", JSON.stringify(demoUser));
    toast.success("Google registration successful");
    window.location.href = "/";
  };

  return (
    <section className="form-page">
      <div className="auth-card">
        <h1>User Registration</h1>
        <p className="auth-subtitle">
          Register yourself to access private tile pages and profile features.
        </p>

        <form onSubmit={handleRegister}>
          <div className="form-control">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label>Photo URL</label>
            <input
              type="url"
              name="image"
              placeholder="Enter your photo URL"
              required
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              onChange={handleChange}
            />
          </div>

          <button className="btn full-btn" type="submit">
            Register
          </button>
        </form>

        <button onClick={handleGoogleLogin} className="btn google-btn full-btn">
          Register with Google
        </button>

        <p className="auth-link">
          Already have an account? <Link href="/login">Login</Link>
        </p>
      </div>
    </section>
  );
}
