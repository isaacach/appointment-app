import axios from 'axios';
import { useState } from 'react'
import Calender from '../components/Calender.jsx'

import '../styles/makeAppointment.css'

export default function MakeAppointment() {
  const [description, setDescription] = useState("")
  const userId = window.localStorage.getItem("user");


  const handleSubmit = (event) => {
    event.preventDefault();
    const appointment = { date, time, description};

    try {
      axios.post(`http://localhost:8080/appointments/create/${userId}`, appointment,
      { 
        headers: { 'Content-Type': 'application/json' }
      }
      ).then((res) => {
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
        <Calender />
        <label>Description:</label>
        <select type="text" value={description} onChange={(e) => setDescription(e.target.value)}>
          <option value="hair cut">Hair cut</option>
          <option value="eye brow">Eye brows</option>
          <option value="spray tan">Spray tan</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
