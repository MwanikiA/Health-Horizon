import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Appointments = () => {
  const [tokenGet, setToken] = useState("");
  const [appointments, setAppointments] = useState([]);
  const [patients, setPatients] = useState([]);
  const [newAppointment, setNewAppointment] = useState({
    patient: "",
    date: "",
    description: "",
  });
  const [expandedPatient, setExpandedPatient] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api//appointments/")
      .then((response) => response.json())
      .then((data) => setAppointments(data));

    fetch("http://127.0.0.1:8000/api//patients/")
      .then((response) => response.json())
      .then((data) => setPatients(data));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment({ ...newAppointment, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch ('http://127.0.0.1:8000/api//appointments/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAppointment),
    })
      .then((response) => response.json())
      .then((data) => {
        setAppointments([...appointments, data]);
        setNewAppointment({
          patient: "",
          date: "",
          description: "",
        });
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  }, []);

  const togglePatientDetails = (patientId) => {
    setExpandedPatient(expandedPatient === patientId ? null : patientId);
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
        <h1 className="text-3xl mb-4">Appointments</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="mb-4">
            <div className="mb-4">
              <label className="block text-gray-700">Patient</label>
              <input
                type="text"
                name="patient"
                value={newAppointment.patient}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Date</label>
              <input
                type="datetime-local"
                name="date"
                value={newAppointment.date}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Description</label>
              <textarea
                name="description"
                value={newAppointment.description}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded"
            >
              Add Appointment
            </button>
          </form>
          <ul>
            {appointments.map((appointment) => (
              <li key={appointment.id} className="mb-4 border-b pb-2">
                <button
                  onClick={() => togglePatientDetails(appointment.patient.id)}
                  className="text-blue-500 hover:underline focus:outline-none"
                >
                  {appointment.patient.name} -{" "}
                  {new Date(appointment.date).toLocaleString()}
                </button>
                {expandedPatient === appointment.patient.id && (
                  <div className="mt-2 bg-gray-100 p-4 rounded-lg">
                    <p>
                      <strong>Patient Name:</strong>{" "}
                      {appointment.patient_name}
                    </p>
                    <p>
                      <strong>Appointment Description:</strong>{" "}
                      {appointment.description}
                    </p>
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

export default Appointments;

