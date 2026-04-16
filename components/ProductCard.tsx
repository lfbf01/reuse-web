<<<<<<< HEAD
export default function ProductCard() {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "10px",
      overflow: "hidden",
      width: "220px",
      background: "white",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }}>
      
      {/* Imagem fake */}
      <div style={{
        height: "120px",
        background: "#c8e6c9"
      }} />

      <div style={{padding: "10px"}}>
        <h3 style={{color: "#2e7d32"}}>Notebook usado</h3>
        <p style={{fontSize: "14px", color: "#333"}}>Bom estado</p>

        <strong style={{display: "block", margin: "10px 0", color: "#333"}}>
=======
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
        cursor: "pointer"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      
      {/* Imagem */}
      <div style={{
        height: "140px",
        background: "#2e7d32"
      }} />

      <div style={{ padding: "15px" }}>
        <h3 style={{ marginBottom: "5px" }}>
          Notebook usado
        </h3>

        <p style={{ 
          color: "var(--text-secondary)", 
          fontSize: "14px" 
        }}>
          Bom estado
        </p>

        <strong style={{
          display: "block",
          margin: "10px 0",
          color: "#2e7d32"
        }}>
>>>>>>> 27295eb (feat: front completo com dark mode)
          R$ 1200
        </strong>

        <button style={{
          width: "100%",
<<<<<<< HEAD
          padding: "8px",
          background: "#2e7d32",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
=======
          padding: "10px",
          background: "#2e7d32",
          color: "white",
          border: "none",
          borderRadius: "6px"
>>>>>>> 27295eb (feat: front completo com dark mode)
        }}>
          Ver mais
        </button>
      </div>
<<<<<<< HEAD

=======
>>>>>>> 27295eb (feat: front completo com dark mode)
    </div>
  );
}