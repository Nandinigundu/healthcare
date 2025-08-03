import './index.css';
import { useParams, Link } from "react-router-dom";
import doctorsData from '../../data/doctors.json';
import { useState } from "react";
import AppointmentForm from '../AppointmentForm';

const DoctorProfile = () => {
  const { id } = useParams();
  const doctor = doctorsData.find(doc => doc.id === parseInt(id));
  const [booking, setBooking] = useState(false);

  if (!doctor) return <div className="not-found">Doctor not found</div>;

  return (
    <div className="profile-container">
      <Link to="/" className="back-link">← Back to Doctors</Link>
      <div className="profile-card">
        <img src={doctor.profileImg} alt={doctor.name} className="profile-img" />
        <h2>{doctor.name}</h2>
        <p className="sp">{doctor.specialization}</p>
        <p className="bio">{doctor.bio}</p>
        <p className={doctor.availability ? "available" : "unavailable"}>
          Status: {doctor.availability ? "Available" : "Unavailable"}
        </p>
        {doctor.availability && !booking &&
          <button className="book-btn" onClick={() => setBooking(true)}>
            Book Appointment
          </button>
        }
        {booking &&
          <AppointmentForm doctor={doctor} onClose={() => setBooking(false)} />
        }
      </div>
    </div>
  );
};

export default DoctorProfile;
