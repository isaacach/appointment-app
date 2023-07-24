import axios from 'axios';
import { useState } from 'react'

import '../styles/makeAppointment.css'

export default function MakeAppointment() {
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [description, setDescription] = useState("")
  const user = window.localStorage.getItem("user");

  const handleDate = (event) => {
    setDate(event.target.value);
  };

  const handleTime = (event) => {
    setTime(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const appointment = { date, time, description, user};
    try {
      axios.post(`http://localhost:8080/appointments/create`, appointment).then((res) => {
        console.log(res.data);
      });

    } catch (error) {
      console.log(error);
    }

  };

  return (
    <div className="make-appointment">
      <div>
        <h2>Make an appointment</h2>
      </div>
      <form onSubmit={handleSubmit}>  
        <label >Appointment Date:</label>
        <input onChange={handleDate} type="date" />
        <label >Appointment Time:</label>
        <input onChange={handleTime} type="time" />
        <label>Appointment Type:</label>
        <input onChange={handleDescription} type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
