import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <main style={{ background: "#f1f8f4", minHeight: "100vh" }}>
      
      <Navbar />

      {/* Barra de busca */}
      <div style={{
        background: "#2e7d32",
        padding: "20px",
        display: "flex",
        justifyContent: "center"
      }}>
        <input
          placeholder="Buscar produtos..."
          style={{
            width: "60%",
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            outline: "none"
          }}
        />
      </div>

      <div style={{ padding: "30px" }}>
        
        {/* Título */}
        <h1 style={{ color: "#1b5e20" }}>
          ReUse ♻️
        </h1>

        <p style={{ marginBottom: "30px", color: "#333" }}>
          Compre, venda e reutilize produtos de forma sustentável.
        </p>

        {/* Produtos */}
        <h2 style={{ marginBottom: "20px", color: "#333" }}>
          Produtos disponíveis
        </h2>

        <div style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap"
        }}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>

      </div>

    </main>
  );
}