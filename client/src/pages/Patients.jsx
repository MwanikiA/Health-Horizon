import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Patientsmain = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch('/api/patients/')
      .then(response => response.json())
      .then(data => setPatients(data));
  }, []);

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl mb-4">Enrolled Patients</h1>
      <div className="mb-4">
        <Link to="/patientdetails" className="text-blue-500">
          Enroll New Patient
        </Link>
      </div>
      <div className="bg-white p-4 rounded shadow-md">
        <ul>
          {patients.map(patient => (
            <li key={patient.id} className="mb-2">
              <Link to={`/patients/${patient.id}`} className="text-blue-500">
                {patient.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
};

export default Patientsmain;

