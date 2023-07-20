import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    axios.get(`http://localhost:8080/user/users`).then((response) => {
      console.log(response);
      setUser(response.data[0]);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
          backgroundColor: "grey",
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "grey",
      }}
    >
      <div>name: {user.name}</div>
      <div>email: {user.email}</div>
      <div>role: {user.role}</div>
    </div>
  );
}

export default App;
