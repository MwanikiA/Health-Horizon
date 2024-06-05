import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Patientdetails = () => {
  const [ tokenGet, setToken ] = useState('')

  const { id } = useParams();
  const [patient, setPatient] = useState(null);
  const [medicalHistory, setMedicalHistory] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    fetch(`/api/patients/${id}/`)
      .then(response => response.json())
      .then(data => setPatient(data));
  }, [id]);

  const handleCreateNewPatient = () => {
    fetch('/api/patients/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        age: age,
        medical_history: medicalHistory,
      }),
    })
      .then(response => response.json())
      .then(newPatient => {
        alert('New patient created successfully!');
        setPatient(newPatient);
      });
  };



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
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl mb-4">{patient?.name}</h1>
        <p>Age: {patient?.age}</p>
        <p>Medical History: {patient?.medical_history}</p>
        
        <div className="mt-4">
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter age"
            value={age}
            onChange={e => setAge(e.target.value)}
          />
          <textarea
            className="w-full px-3 py-2 border rounded"
            placeholder="Update medical history"
            rows="4"
            value={medicalHistory}
            onChange={e => setMedicalHistory(e.target.value)}
          ></textarea>
          <button
            onClick={handleCreateNewPatient}
            className="w-full bg-blue-500 text-white py-2 rounded mt-2"
          >
            Create New Patient
          </button>
        </div>
      </div>
    </>
  );
};

export default Patientdetails;