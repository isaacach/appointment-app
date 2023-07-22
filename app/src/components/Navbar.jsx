
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div onClick={() => navigate("/")} className="navbar-logo">
        <p>Beyond Blessed</p>
        <img src="src/assets/scissors.png" />
      </div>
      <ul className="nav-items">
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/location">Location</Link>
          </li>
          <li>
            {window.localStorage.getItem("token") !== null ? (
              <Link to="/Logout">Logout</Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
    </div>
  );
}


