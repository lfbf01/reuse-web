<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import Image from "next/image";
=======
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
>>>>>>> 27295eb (feat: front completo com dark mode)

export default function Home() {
  return (
    <main style={{ background: "var(--bg)", 
  minHeight: "100vh"  }}>
      
      <Navbar />

      {/* Barra de busca */}
      <div style={{
        padding: "30px 20px",
        display: "flex",
        justifyContent: "center"
      }}>
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
  color: "var(--text)"
}}
        />
      </div>

      {/* Conteúdo */}
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px"
      }}>
        
        <h1 style={{
          fontSize: "32px",
          color: "#1b5e20",
          marginBottom: "10px"
        }}>
          Descubra produtos sustentáveis ♻️
        </h1>

        <p style={{
          color: "#555",
          marginBottom: "30px"
        }}>
          Compre, venda e reutilize com consciência.
        </p>

        <h2 style={{ marginBottom: "20px" }}>
          Produtos disponíveis
        </h2>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "20px"
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
<<<<<<< HEAD
}
>>>>>>> 69711cc (Initial commit from Create Next App)
=======
}
>>>>>>> 27295eb (feat: front completo com dark mode)
