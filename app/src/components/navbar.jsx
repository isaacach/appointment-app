import '../styles/navbar.css'

export default function Navbar() {

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Netflix Logo" />
      </div>
      <ul className='nav-items'>
        <li>Home</li>
        <li>Schedule Appointment</li>
        <li>Your Appointments</li>
        <li>Login</li>
        <li>Register</li>
      </ul>
    </div>
  )
}