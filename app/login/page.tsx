export default function Login() {
  return (
    <main style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#e8f5e9"
    }}>
      
      <div style={{
        background: "white",
        padding: "40px",
        borderRadius: "10px",
        width: "300px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
      }}>
        
        <h1 style={{
          textAlign: "center",
          color: "#2e7d32",
          marginBottom: "20px"
        }}>
          ReUse ♻️
        </h1>

        <p style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#555"
        }}>
          Entre na sua conta
        </p>

        <input 
          type="email" 
          placeholder="Email"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
            color: "#555",
            border: "1px solid #ccc"
          }}
        />

        <input 
          type="password" 
          placeholder="Senha"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "5px",
            color: "#555",
            border: "1px solid #ccc"
          }}
        />

        <button style={{
          width: "100%",
          padding: "10px",
          background: "#2e7d32",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}>
          Entrar
        </button>

        <p style={{
          marginTop: "15px",
          textAlign: "center",
          fontSize: "14px",
          color: "#555"
        }}>
          Não tem conta? <span style={{color: "#2e7d32"}}>Cadastre-se</span>
        </p>

      </div>
    </main>
  );
}