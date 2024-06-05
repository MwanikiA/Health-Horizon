import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Homepage = () => {
  const [ tokenGet, setToken ] = useState('')

  useEffect(()=>{
    const token = localStorage.getItem('token')
    setToken(token)

  }, [])

  if (!tokenGet) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h1 className="text-2xl mb-4">Please Login</h1>
          <Link to="/login" className="w-full bg-blue-400 text-white py-2 rounded block text-center">
            Login
          </Link>
        </div>
      </div>
    )
  }

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
