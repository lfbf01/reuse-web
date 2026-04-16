import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

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
      <div
        style={{
          padding: "30px 20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <input
          placeholder="Buscar produtos..."
          style={{
            width: "100%",
            maxWidth: "600px",
            padding: "14px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            fontSize: "16px",
            background: "var(--bg-card)",
            color: "var(--text)",
            outline: "none",
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
        <h1
          style={{
            fontSize: "32px",
            color: "#2e7d32",
            marginBottom: "10px",
          }}
        >
          Descubra produtos sustentáveis ♻️
        </h1>

        <p
          style={{
            color: "var(--text-secondary)",
            marginBottom: "30px",
          }}
        >
          Compre, venda e reutilize com consciência.
        </p>

        <h2 style={{ marginBottom: "20px" }}>
          Produtos disponíveis
        </h2>

        {/* Grid de produtos */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
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