import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Services from "./pages/Services.jsx";
import Location from "./pages/Location.jsx";
import Logout from "./components/Logout.jsx";
import MakeAppointments from "./pages/MakeAppointments.jsx";

import "./styles/App.css";
import "./styles/navbar.css";
import "./styles/resets.css";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/services" element={<Services />}></Route>
        <Route exact path="/location" element={<Location />}></Route>
        <Route
          exact
          path="/appointments"
          element={<MakeAppointments />}
        ></Route>
        <Route exact path="/logout" element={<Logout />}></Route>
      </Routes>
    </div>
  );
}

export default App;
