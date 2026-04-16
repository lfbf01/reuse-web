"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  // carregar tema salvo
  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "dark") {
      document.body.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (dark) {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    setDark(!dark);
  };

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "var(--bg-card)",
        borderBottom: "1px solid #ccc",
        padding: "15px 30px",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <h2 style={{ color: "#2e7d32", margin: 0 }}>
          ReUse ♻️
        </h2>

        {/* Links */}
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <Link href="/" style={{ color: "var(--text)", textDecoration: "none" }}>
            Home
          </Link>

          <Link
            href="/login"
            style={{
              background: "#2e7d32",
              color: "white",
              padding: "8px 16px",
              borderRadius: "6px",
              textDecoration: "none",
            }}
          >
            Login
          </Link>

          {/* Botão Dark Mode */}
          <button
            onClick={toggleTheme}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "18px",
            }}
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}