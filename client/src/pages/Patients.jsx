import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Patientsmain = () => {
  const [tokenGet, setToken] = useState("");

  const [patients, setPatients] = useState([]);
  const [expandedPatientId, setExpandedPatientId] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api//patients/')
      .then((response) => response.json())
      .then((data) => setPatients(data));
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  }, []);

  const handleToggle = (id) => {
    setExpandedPatientId(expandedPatientId === id ? null : id);
  };

  if (!tokenGet) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h1 className="text-2xl mb-4">Please Login</h1>
          <Link
            to="/login"
            className="w-full bg-blue-400 text-white py-2 rounded block text-center"
          >
            Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl mb-4 font-bold text-gray-700">Enrolled Patients</h1>
        <div className="mb-4">
          <Link to="/patientdetails" className="text-blue-500 hover:underline">
            Enroll New Patient
          </Link>
        </div>
        <div className="bg-white p-6 rounded shadow-md">
          <ul>
            {patients.map((patient) => (
              <li key={patient.id} className="mb-4">
                <button
                  onClick={() => handleToggle(patient.id)}
                  className="text-blue-500 font-semibold focus:outline-none"
                >
                  {patient.name}
                </button>
                {expandedPatientId === patient.id && (
                  <div className="mt-2 bg-gray-100 p-4 rounded shadow-inner">
                    <p><strong>Age:</strong> {patient.age}</p>
                    <p><strong>Medical History:</strong> {patient.medical_history}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Patientsmain;

