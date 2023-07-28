import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/login.css';

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");

  let navigate = useNavigate();

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { username, password };
    try {
      axios.post(`http://localhost:8080/login`, user,
      { headers: { 'Content-Type': 'application/json' } }
      ).then((res) => {
        window.localStorage.setItem("token", res.data.token);
        window.localStorage.setItem("user", res.data.id);
        setToken(res.data.token);
      });
    } catch (error) {
      console.log(error);
      console.log(error.request.response);
      setMessage(error.request.response)
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div className="login">
      <div>
        <h2>User Login</h2>
        <p>{message}</p>
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
