import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { Search } from "lucide-react";

export default function Home() {
  return (
    <main
      style={{
        background: "var(--bg)",
        minHeight: "100vh",
        transition: "all 0.3s ease",
      }}
    >
      <Navbar />

      {/* Barra de busca */}
      <div style={{
  position: "relative",
  width: "100%",
  maxWidth: "600px"
}}>
  <Search size={18} style={{
    position: "absolute",
    top: "50%",
    left: "12px",
    transform: "translateY(-50%)",
    color: "var(--text-secondary)"
  }} />

  <input
    placeholder="Buscar produtos..."
    style={{
      width: "100%",
      padding: "14px 14px 14px 40px",
      borderRadius: "10px",
      border: "1px solid #ccc",
      fontSize: "16px",
      background: "var(--bg-card)",
      color: "var(--text)",
      outline: "none"
    }}
  />
</div>

      {/* Conteúdo */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <h1 style={{
  fontSize: "36px",
  fontWeight: "600",
  letterSpacing: "-0.5px",
  marginBottom: "10px"
}}>
  Descubra produtos sustentáveis
</h1>

        <p style={{
  color: "var(--text-secondary)",
  fontSize: "16px",
  lineHeight: "1.6",
  marginBottom: "30px"
}}>
  Compre, venda e reutilize com consciência.
</p>

        <h2 style={{ marginBottom: "20px" }}>
          Produtos disponíveis
        </h2>

        {/* Grid de produtos */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
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