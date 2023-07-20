import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/navbar";
import './styles/App.css';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8080/user/users`)
        .then(res => {
          const user = res.data;
          setUsers(user);
        })
  }, []);

  return (
    <div className="App">
      <Navbar />
      <h1>React App</h1>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
