"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { User, Lock, Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(180deg, #4caf50, #2196f3)",
      }}
      
    ><Link href="/">
  <button
    style={{
      position: "absolute",
      top: "20px",
      left: "20px",
      display: "flex",
      alignItems: "center",
      gap: "6px",
      background: "rgba(255,255,255,0.2)",
      color: "white",
      border: "none",
      padding: "8px 12px",
      borderRadius: "8px",
      cursor: "pointer",
      backdropFilter: "blur(10px)",
      transition: "0.2s"
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = "rgba(255,255,255,0.35)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = "rgba(255,255,255,0.2)";
    }}
  >
    <ArrowLeft size={16} />
    Voltar
  </button>
</Link>
      <div
        style={{
          width: "340px",
          padding: "30px 20px",
          borderRadius: "20px",
          backdropFilter: "blur(15px)",
          background: "rgba(255,255,255,0.2)",
          boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
          border: "1px solid rgba(255,255,255,0.3)",
          color: "white",
        }}
      >
        {/* LOGO */}
        <div style={{ marginBottom: "20px" }}>
  <img
    src="/logo.png"
    alt="ReUse"
    style={{
      width: "120px",
      display: "block",
      margin: "0 auto",
        }}
  />
</div>
        <h2 style={{ marginBottom: "15px" }}>Login</h2>

        {/* USUÁRIO */}
        <label style={{ fontSize: "14px" }}>Usuário</label>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "5px",
            marginBottom: "15px",
            borderRadius: "10px",
            background: "rgba(255,255,255,0.2)",
            padding: "10px",
            transition: "0.2s",
          }}
        >
          <User size={18} />
          <input
            placeholder="Username"
            style={{
              marginLeft: "10px",
              border: "none",
              outline: "none",
              background: "transparent",
              color: "white",
              width: "100%",
            }}
            onFocus={(e) => {
              e.currentTarget.parentElement!.style.background =
                "rgba(255,255,255,0.3)";
            }}
            onBlur={(e) => {
              e.currentTarget.parentElement!.style.background =
                "rgba(255,255,255,0.2)";
            }}
          />
        </div>

        {/* SENHA */}
        <label style={{ fontSize: "14px" }}>Senha</label>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "5px",
            marginBottom: "10px",
            borderRadius: "10px",
            background: "rgba(255,255,255,0.2)",
            padding: "10px",
            transition: "0.2s",
          }}
        >
          <Lock size={18} />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            style={{
              marginLeft: "10px",
              border: "none",
              outline: "none",
              background: "transparent",
              color: "white",
              width: "100%",
            }}
            onFocus={(e) => {
              e.currentTarget.parentElement!.style.background =
                "rgba(255,255,255,0.3)";
            }}
            onBlur={(e) => {
              e.currentTarget.parentElement!.style.background =
                "rgba(255,255,255,0.2)";
            }}
          />

          {/* OLHO */}
          <button
            onClick={() => setShowPassword(!showPassword)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "white",
            }}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* OPÇÕES */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "12px",
            marginBottom: "15px",
          }}
        >
          <label>
            <input type="checkbox" /> Lembrar-me
          </label>

          <span style={{ textDecoration: "underline", cursor: "pointer" }}>
            Esqueci a senha
          </span>
        </div>

        {/* BOTÃO */}
        <button
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "none",
            background: "#64b5f6",
            color: "white",
            fontWeight: 600,
            cursor: "pointer",
            transition: "0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#42a5f5";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#64b5f6";
          }}
        >
          Entrar
        </button>

        {/* RODAPÉ */}
        <p
          style={{
            marginTop: "20px",
            fontSize: "12px",
            textAlign: "center",
          }}
        >
          Não possui uma conta?{" "}
          <span style={{ textDecoration: "underline", cursor: "pointer" }}>
            Crie uma
          </span>
        </p>
      </div>
    </main>
  );
}