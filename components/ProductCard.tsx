"use client";

import { MapPin } from "lucide-react";

export default function ProductCard() {
  return (
    <div
      style={{
        borderRadius: "12px",
        overflow: "hidden",
        background: "var(--bg-card)",
        color: "var(--text)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        transition: "all 0.3s ease",
        cursor: "pointer"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >

      {/* IMAGEM REAL */}
      <img
        src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
        alt="produto"
        style={{
          width: "100%",
          height: "160px",
          objectFit: "cover"
        }}
      />

      {/* CONTEÚDO */}
      <div style={{ padding: "12px" }}>

        {/* BADGE */}
        <span style={{
          background: "#e8f5e9",
          color: "#2e7d32",
          fontSize: "12px",
          padding: "3px 8px",
          borderRadius: "5px"
        }}>
          Usado
        </span>

        <h3 style={{
          margin: "8px 0 4px",
          fontSize: "16px",
          fontWeight: 500
        }}>
          Notebook Dell i5
        </h3>

        <p style={{
          color: "var(--text-secondary)",
          fontSize: "13px"
        }}>
          8GB RAM • SSD 256GB
        </p>

        {/* PREÇO */}
        <strong style={{
          display: "block",
          margin: "10px 0",
          fontSize: "18px",
          color: "#2e7d32"
        }}>
          R$ 1200
        </strong>

        {/* LOCAL */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          fontSize: "12px",
          color: "var(--text-secondary)"
        }}>
          <MapPin size={14} />
          Recife, PE
        </div>

      </div>
    </div>
  );
}