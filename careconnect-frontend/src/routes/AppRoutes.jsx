import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../Pages/Auth/login";
import Register from "../Pages/Auth/Register";

import Dashboard from "../Patient/Dashboard";
import Appointments from "../Patient/Appointments";
import Calendar from "../Patient/Calendar";
import Messages from "../Patient/Messages";
import Reports from "../Patient/Reports";
import Prescriptions from "../Patient/Prescriptions";
import Settings from "../Patient/Settings";

import DoctorDashboard from "../Doctor/Dashboard";
import Patients from "../Doctor/Patients";    
import PatientDetails from "../Doctor/PatientDetails";
import DoctorAppointments from "../Doctor/Appointments";
import DoctorReports from "../Doctor/Reports";
import DoctorMessages from "../Doctor/Messages";
import DoctorSettings from "../Doctor/Settings";

const AppRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/patient/dashboard" element={<Dashboard />} />
      <Route path="/patient/appointments" element={<Appointments />}/>
      <Route path="/patient/calendar" element={<Calendar />} />
      <Route path="/patient/messages" element={<Messages />} />
      <Route path="/patient/reports" element={<Reports />} />
      <Route path="/patient/prescriptions" element={<Prescriptions />} />
      <Route path="/patient/settings" element={<Settings />} />

      <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
      <Route path="/doctor/patients" element={<Patients />} />
      <Route path="/doctor/patients/:id" element={<PatientDetails />}/>
      <Route path="/doctor/appointments" element={<DoctorAppointments />} />
      <Route path="/doctor/reports" element={<DoctorReports />} />
      <Route path="/doctor/messages" element={<DoctorMessages />} />
      <Route path="/doctor/settings" element={<DoctorSettings />} />


    </Routes>
  );
};

export default AppRoutes;