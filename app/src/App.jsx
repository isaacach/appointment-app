import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Services from "./pages/Services.jsx";
import Location from "./pages/Location.jsx";

import "./styles/App.css";
import "./styles/navbar.css";
import "./styles/resets.css";

function App() {

  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <div className="navbar-logo">
            <p>Beyond Blessed</p>
            <img src="src/assets/scissors.png"/>
          </div>
          <ul className="nav-items">
            <li>
              <Link to="/">Home</Link>
            </li>
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
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/location">Location</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/services" element={<Services />}></Route>
          <Route exact path="/location" element={<Location />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
