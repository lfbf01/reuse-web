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
          R$ 1200
        </strong>

        <button style={{
          width: "100%",
          padding: "8px",
          background: "#2e7d32",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}>
          Ver mais
        </button>
      </div>

    </div>
  );
}