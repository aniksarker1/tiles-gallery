"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function UpdateProfilePage() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!name || !image) {
      toast.error("Please fill both fields");
      return;
    }

    toast.success("Profile updated successfully");
    window.location.href = "/my-profile";
  };

  return (
    <section className="form-page">
      <div className="auth-card">
        <h1>Update Information</h1>
        <p className="auth-subtitle">
          Update your profile name and image URL.
        </p>

        <form onSubmit={handleUpdate}>
          <div className="form-control">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter new name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-control">
            <label>Image URL</label>
            <input
              type="url"
              placeholder="Enter new image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          <button className="btn full-btn" type="submit">
            Update Information
          </button>
        </form>
      </div>
    </section>
  );
}
