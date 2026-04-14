import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 30px",
      background: "#1b5e20",
      color: "white",
      boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
    }}>
      
      {/* Logo */}
      <h2 style={{margin: 0}}>ReUse ♻️</h2>

      {/* Links */}
      <div style={{display: "flex", gap: "20px", alignItems: "center"}}>
        
        <Link href="/" style={{color: "white", textDecoration: "none"}}>
          Home
        </Link>

        <Link href="/login" style={{
          background: "#4caf50",
          padding: "8px 15px",
          borderRadius: "5px",
          color: "white",
          textDecoration: "none"
        }}>
          Login
        </Link>

      </div>

    </nav>
  );
}