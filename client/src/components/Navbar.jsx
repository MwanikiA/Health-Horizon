import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Navbar() {
  const token = localStorage.getItem('token')

  const navigate = useNavigate()
  const handleLogout = ()=>{
    localStorage.removeItem('token')
    navigate('/login')
    
  }

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
          {
            token ? (
              <p to="/logout" onClick={handleLogout} className="hover:underline cursor-pointer">Logout</p>
            ) : (
              <Link to="/login" className="hover:underline">Login</Link>
            )
          }
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
