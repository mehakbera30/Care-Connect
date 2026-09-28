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
// import Appointments from "../Patient/Appointment";

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

    </Routes>
  );
};

export default AppRoutes;