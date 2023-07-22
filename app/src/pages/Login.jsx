import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { username, password};
    try {
      axios.post(`http://localhost:8080/login`, user).then((res) => {
        console.log(res.data);
        window.localStorage.setItem("token", res.data.token);
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    
  };
  return (
    <div className="login">
      <div>
        <h2>User Login</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" value={username} onChange={handleUsername} />
        <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePassword}
          />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
