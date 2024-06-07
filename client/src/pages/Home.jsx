import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Herosection from '../components/Hero';

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
  <Herosection/>
  
   </>
  );
};

export default Homepage;
