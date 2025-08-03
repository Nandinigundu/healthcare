import './index.css';
import { useState } from "react";

const AppointmentForm = ({ doctor, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    datetime: "",
  });
  const [confirmed, setConfirmed] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.datetime) {
      alert("All fields required!");
      return;
    }
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <div className="confirmation-message">
        <p>Appointment confirmed with <strong>{doctor.name}</strong> on <strong>{form.datetime}</strong>.</p>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    );
  }

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      <h4>Book Appointment with {doctor.name}</h4>
      <input
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        type="email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        name="datetime"
        placeholder="Date & Time"
        type="datetime-local"
        value={form.datetime}
        onChange={handleChange}
      />
      <div className="form-actions">
        <button type="submit" className="confirm-btn">Confirm</button>
        <button onClick={onClose} type="button" className="cancel-btn">Cancel</button>
      </div>
    </form>
  );
};

export default AppointmentForm;
