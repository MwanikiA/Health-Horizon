import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Appointments from './pages/Appointments.jsx'
import Patientsmain from './pages/Patients.jsx'
import Login from './authentication/Login.jsx'
import Register from './authentication/Register.jsx'
import Homepage from './pages/Home.jsx'
import Patientdetails from './pages/Patientdetails.jsx'

const paths = createBrowserRouter([
  {
    path: "",
    element: <App/>
  },
  {
    path: "/appointments",
    element: <Appointments/>
  },
  {
    path: "/patients",
    element: <Patientsmain/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/home",
    element: <Homepage/>
  },
  {
    path: "/patientdetails",
    element: <Patientdetails/>
  },



])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={paths} />
  </React.StrictMode>,
)