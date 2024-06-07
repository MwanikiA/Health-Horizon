import React from 'react';
import { Link } from 'react-router-dom';

const Herosection = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <section
        className="flex-1 bg-cover bg-center text-white"
        style={{ backgroundImage: 'url("https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/SAKGwKC/medical-background-with-loop_n26ve-_yg_thumbnail-1080_05.png")' }}
      >
        <div className="bg-blue-900 bg-opacity-50 h-full flex flex-col justify-center items-center p-8">
          <h1 className="text-5xl font-bold mb-4">Welcome to HealthHorizon</h1>
          <p className="text-2xl mb-6">Efficient, Reliable, and Secure Patient Management</p>
          <Link to="/patientdetails" className="bg-blue-500 text-white py-2 px-4 rounded">
           New Patient
          </Link>
        </div>
      </section>

      <section className="bg-white p-8 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">Navigate Our Services</h2>
        <div className="flex justify-around">
          <Link
            to="/patientdetails"
            className="block bg-blue-500 text-white py-3 px-6 rounded transition-transform transform hover:scale-105"
          >
            Enroll New Patient
          </Link>
          <Link
            to="/patients"
            className="block bg-blue-500 text-white py-3 px-6 rounded transition-transform transform hover:scale-105"
          >
            View Patient Data
          </Link>
          <Link
            to="/appointments"
            className="block bg-blue-500 text-white py-3 px-6 rounded transition-transform transform hover:scale-105"
          >
            Manage Appointments
          </Link>
        </div>
      </section>

      
      <footer className="bg-blue-900 text-white text-center py-4">
        <p>&copy; 2024 HealthHorizon. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Herosection;
