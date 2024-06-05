import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Patientsmain = () => {
  const [tokenGet, setToken] = useState("");

  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch("/api/patients/")
      .then((response) => response.json())
      .then((data) => setPatients(data));
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  }, []);

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
        <h1 className="text-3xl mb-4">Enrolled Patients</h1>
        <div className="mb-4">
          <Link to="/patientdetails" className="text-blue-500">
            Enroll New Patient
          </Link>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <ul>
            {patients.map((patient) => (
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
