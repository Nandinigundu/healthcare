import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DoctorList from "./components/DoctorList";
import DoctorProfile from "./components/DoctorProfile";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<DoctorList />} />
      <Route path="/doctor/:id" element={<DoctorProfile />} />
    </Routes>
  </Router>
);

export default App;
