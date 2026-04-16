"use client";

export default function ProductCard() {
  return (
    <div
      style={{
        borderRadius: "12px",
        overflow: "hidden",
        background: "var(--bg-card)",
        color: "var(--text)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* Imagem */}
      <div
        style={{
          height: "140px",
          background: "#2e7d32",
        }}
      />

      {/* Conteúdo */}
      <div style={{ padding: "15px" }}>
        <h3 style={{ marginBottom: "5px" }}>
          Notebook usado
        </h3>

        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "14px",
          }}
        >
          Bom estado
        </p>

        <strong
          style={{
            display: "block",
            margin: "10px 0",
            color: "#2e7d32",
          }}
        >
          R$ 1200
        </strong>

        <button
          style={{
            width: "100%",
            padding: "10px",
            background: "#2e7d32",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Ver mais
        </button>
      </div>
    </div>
  );
}