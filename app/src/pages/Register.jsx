import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/register.css";

export default function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, username, email, password };
    try {
      axios.post(`http://localhost:8080/register`, user).then((res) => {
        console.log(res);
        console.log(res.data);
        navigate("/login");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register">
      <div>
        <h2>User Registration</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <label className="label">Name</label>
        <input
          onChange={handleName}
          className="input"
          value={name}
          type="text"
        />
        <label className="label">Username</label>
        <input
          onChange={handleUsername}
          className="input"
          value={username}
          type="text"
        />

        <label className="label">Email</label>
        <input
          onChange={handleEmail}
          className="input"
          value={email}
          type="email"
        />

        <label className="label">Password</label>
        <input
          onChange={handlePassword}
          className="input"
          value={password}
          type="password"
        />

        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
