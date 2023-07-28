import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/logout.css";

export default function Logout() {

  const navigate = useNavigate();

  const deleteToken = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user");
  };

  useEffect(() => {
    deleteToken();
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, []);

  return (
    <div className="logout">
      <h1>Logged out</h1>
    </div>
  );
}