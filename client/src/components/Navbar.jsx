import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <>
    <nav className="bg-blue-700 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <div className="flex space-x-4">
          <Link to="/home" className="hover:underline">Home</Link>
          <Link to="/patients" className="hover:underline">Patients</Link>
          <Link to="/appointments" className="hover:underline">Appointments</Link>

        </div>
        <div>
          <Link to="/login" className="hover:underline">Login</Link>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
