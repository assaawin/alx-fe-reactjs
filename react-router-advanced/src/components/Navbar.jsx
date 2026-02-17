import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav style={{ padding: "20px", background: "#333", color: "white" }}>
      <Link to="/" style={{ marginRight: "20px", color: "white" }}>
        Home
      </Link>
      <Link to="/blog/1" style={{ marginRight: "20px", color: "white" }}>
        Blog Post 1
      </Link>{" "}
      {/* ← New */}
      <Link to="/blog/42" style={{ marginRight: "20px", color: "white" }}>
        Blog Post 42
      </Link>{" "}
      {/* ← New */}
      {!isAuthenticated ? (
        <Link to="/login" style={{ color: "white" }}>
          Login
        </Link>
      ) : (
        <>
          <Link to="/profile" style={{ marginRight: "20px", color: "white" }}>
            Profile
          </Link>
          <button
            onClick={handleLogout}
            style={{
              background: "none",
              border: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </>
      )}
    </nav>
  );
}
