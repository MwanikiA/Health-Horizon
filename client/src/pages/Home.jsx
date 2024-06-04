import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Homepage = () => {
  return (
  <>
  <Navbar/>
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <h1 className="text-3xl mt-8">Welcome to HealthHorizon</h1>
      <div className="mt-8">
        <Link to="/appointments" className="block mb-4 text-blue-500">
          View Appointments
        </Link>
        <Link to="/patients" className="block mb-4 text-blue-500">
          View Patients
        </Link>
        <Link to="/patientdetails" className="block mb-4 text-blue-500">
          Enroll New Patient
        </Link>
      </div>
    </div>
   </>
  );
};

export default Homepage;
