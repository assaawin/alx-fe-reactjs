import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/profile");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <p>Click below to simulate login:</p>
      <button onClick={handleLogin}>Fake Login</button>
    </div>
  );
}
