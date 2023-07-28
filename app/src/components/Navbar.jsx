import { Link, useNavigate } from "react-router-dom";

export default function Navbar(props) {
  const navigate = useNavigate();

  if (props.validity) {
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
            <Link to="/appointments">Make an appointment</Link>
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
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </div>
    );
  }

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
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </div>
  );
}
