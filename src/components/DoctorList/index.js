import './index.css';
import { useEffect, useState } from "react";
import doctorsData from '../../data/doctors.json';
import DoctorCard from '../DoctorCard';

const DoctorList = () => {
  const [search, setSearch] = useState("");
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    setDoctors(doctorsData);
  }, []);

  const filteredDoctors = doctors.filter(doc =>
    doc.name.toLowerCase().includes(search.toLowerCase()) ||
    doc.specialization.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="doctor-list-page">
      <h1 className="heading">Book a Doctor</h1>
      <input
        className="search-input"
        placeholder="Search doctor/specialization"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="doctor-list">
        {filteredDoctors.map(doc => (
          <DoctorCard key={doc.id} doctor={doc} />
        ))}
        {filteredDoctors.length === 0 && <p>No doctors found.</p>}
      </div>
    </div>
  );
};

export default DoctorList;
