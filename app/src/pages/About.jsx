import { useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/about.css'

export default function About() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:8080/users`)
      .then(res => {
        const users = res.data
        setUsers(users)
      })
  }, [])

  return (
    <div className="about">
      <h1>About Us</h1>
      {users.map(user => 
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          </div>
      )}
    </div>
  )
}
