import './index.css';
import { Link } from 'react-router-dom';



const DoctorCard = ({ doctor }) => (
  <div className="doctor-card">
    <img src={doctor.profileImg} alt={doctor.name} className="doctor-img" />
    <h3>{doctor.name}</h3>
    <p>{doctor.specialization}</p>
    <p className={doctor.availability ? "available" : "unavailable"}>
      Status: {doctor.availability ? "Available" : "Unavailable"}
    </p>
    <Link to={`/doctor/${doctor.id}`}>
      <button className="profile-btn">View Profile</button>
    </Link>
  </div>
);

export default DoctorCard;
